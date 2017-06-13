package demo.controller;


import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONArray;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import demo.entity.CaForbindden;
import demo.respository.CaForbiddenDaoRepository;
import demo.service.impl.CaForbiddenServicesImpl;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

/**
 * 
 * @author chenxinxin
 *
 */
@RestController
@RequestMapping("/addForbidden")
public class CaForbinddenController {
	private static final Logger logger = LoggerFactory.getLogger(CaForbinddenController.class);
	
	@Autowired
	public CaForbiddenServicesImpl caForbiddenService;
	
	@Autowired
	public CaForbiddenDaoRepository caForbiddenDaoRepository;
	
	@RequestMapping(value = "/get", method=RequestMethod.GET)
	public ModelAndView getEntryByParams(@RequestParam(value = "page", defaultValue = "0") Integer page,
	        @RequestParam(value = "size", defaultValue = "15") Integer size, @RequestParam(value = "sortOption", defaultValue = "ID") String sortOption) {
		logger.info("=====================*****************分页查询=========size"+size+"=page="+page);
		
		if(page < 0){
			page = 0;
		} 
	    Sort sort = new Sort(Direction.DESC, sortOption);
	    Pageable pageable = new PageRequest(page, size, sort);
	    logger.info("============="+caForbiddenDaoRepository.findAll(pageable).getContent());
	    HashMap returnList = new HashMap();
	    returnList.put("caForbiddenList", caForbiddenDaoRepository.findAll(pageable).getContent());
	    returnList.put("page", page);
	    returnList.put("size", size);
	    
	    return new ModelAndView("CaForbiddenList", returnList);
	}

	@GetMapping("/")
	@ApiOperation(value="获取黑名单用户列表",httpMethod = "GET",response = Map.class,notes="获取黑名单用户列表")
	 public Map getAll(@ApiParam(required = true,name = "caForbindden",value = "CA黑名单")CaForbindden caForbindden) throws Exception {  
         
		if(caForbindden == null){
			throw new Exception("===传入参数为空");
		}
		if(caForbindden.getPage() == null || caForbindden.getRows() == null || caForbindden.getSort() == null || caForbindden.getOrder() == null){
			throw new Exception("===传入参数为空");
		}
	        Sort sort = null;  
	        if(caForbindden.getOrder().equals("asc")){  
	             sort = new Sort(Direction.ASC, caForbindden.getSort());  
	        }else if(caForbindden.getOrder().equals("desc")){  
	             sort = new Sort(Direction.DESC, caForbindden.getSort());  
	        }  
	        int pageNum = Integer.parseInt(caForbindden.getPage())-1;  
	        int rows = Integer.parseInt(caForbindden.getRows());  
	        Pageable pageable = new PageRequest(pageNum,rows,sort);  
	        Page<CaForbindden> list = caForbiddenService.findAll(pageable);  
	        Map map=new HashMap();
	        map.put("total", list.getSize());
	        map.put("caForList", list.getContent());
		     return map;//分页应该显示的数据  
	      
	    
	    }  
	/**
	 * 加入黑名单 入库
	 *     @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "用户ID", required = true, dataType = "Long"),
            @ApiImplicitParam(name = "user", value = "用户详细实体user", required = true, dataType = "User")
    })
	我们通过@ApiOperation注解来给API增加说明
	 * @return
	 * @throws ParseException 
	 */

	@PostMapping("/")	
	@ApiOperation(value="创建CA黑名单用户",httpMethod = "POST",response = Map.class,notes="创建CA黑名单用户")

	public Map insertForbiddens(@ApiParam(required = true,name = "caForbindden",value = "CA黑名单")CaForbindden caForbindden) throws ParseException{
//		public String insertForbiddens(String ID,String createUser,String forbiddenSince){
		
		logger.info("=======================插入黑名单====*****start***********");
		Map result = new HashMap();
		result.put("msg", "加入黑名单成功");
		//查询该唯一标识是否已经加入黑名单
		if(caForbindden == null || caForbindden.getForbiddenSince() == null){
			result.put("msg", "传入参数存在空值");
			return result;
			
		}
		caForbindden.setLastUpdateuser("chenxinxin");
	    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:MM:SS");
	    String nowDate = format.format(new Date());

//		CaForbindden checkResult = caForbiddenService.findByID(caForbindden.getID());
	    CaForbindden checkResult = caForbiddenService.findOne(caForbindden.getID());
		//黑名单表已经存在记录
		if(checkResult != null){ 
			//当前黑名单记录为有效状态
			if(checkResult.getRowState() != 1){
				result.put("msg", "已经存在有效的黑名单记录");
				return result;
			}else{
				caForbiddenService.updateById(format.parse(caForbindden.getForbiddenSince()), format.parse(nowDate), caForbindden.getLastUpdateuser(),caForbindden.getID());
			}
		}else{
			logger.info("======================="+caForbindden.getForbiddenSince());
		CaForbindden ca =  new CaForbindden();
		ca.setID(caForbindden.getID());
		ca.setCreateUser(caForbindden.getCreateUser());
		ca.setForbiddenSince(caForbindden.getForbiddenSince());
		ca.setLastUpdateuser(caForbindden.getLastUpdateuser());
		ca.setRowState(1);
//		boolean flag = caForbiddenService.addForbidden(ca);
		CaForbindden returnCa=caForbiddenService.save(ca);
//		if(!flag){
//			result.put("msg", "加入黑名单失败");
//			
//		}
		result.put("msg", returnCa.getID());
		logger.info("=======================插入黑名单====*****end***********");
		}
		
		return result;
	}
	
	/**
	 * 加入黑名单 查询信息
	 * @param id
	 * @return
	 * http://localo//addForbidden/Ca00001/SITCH
	 */
	@GetMapping("/{id}")
	@ApiOperation(value="加入黑名单 查询信息",httpMethod = "GET",response = Map.class,notes="加入黑名单 查询信息")
	public ModelAndView getId(@ApiParam(required = true,name = "id",value = "CA唯一标识") @PathVariable String id){
		logger.info("=======================加入黑名单查询====*****start***********");
		
		CaForbindden ca = new CaForbindden();
		ca.setID(id);
		ca.setCreateUser("chenxinxin");
		ca.setRowState(1);;
		ModelAndView mv=new ModelAndView("addCaForbidden","CaforbinddenList",ca);
		logger.info("=======================加入黑名单查询====*****end***********");
		return mv;
	}
	/**
	 * 删除黑名单
	 * @param id
	 * @return
	 */
	@PostMapping("/{id}")
	@ApiOperation(value="删除黑名单",httpMethod = "POST",response = Map.class,notes="删除黑名单")
	public Map deleteId(@ApiParam(required = true,name = "id",value = "CA唯一标识") @PathVariable String id){
		logger.info("=======================删除黑名单查询====*****start***********");
		CaForbindden ca = new CaForbindden();
		ca.setID(id);
		caForbiddenService.delete(ca);
		Map result = new HashMap();
		result.put("msg", "删除成功");
		logger.info("=======================删除黑名单查询====*****end***********");
		return result;
	}
	/**
	 * 星期二
	 * 今天星期五啊 明天补上办
	 * 明天星期六不用上班哦
	 */
	public void getTt(){
		for(int i=0;i<10;i++){
			system.print("=================");
		}
	}
}
