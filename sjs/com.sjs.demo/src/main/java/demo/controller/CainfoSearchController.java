package demo.controller;


import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import demo.entity.CaInfo;
import demo.respository.CaInfoDaoRepository;
import demo.service.impl.CaInfoServiceImp;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import springfox.documentation.annotations.ApiIgnore;


/**
 * 
 * @author chenxinxin
 *
 */

@RestController
@RequestMapping(value="/cainfo")
public class CainfoSearchController {
	
	private static final Logger logger = LoggerFactory.getLogger(CainfoSearchController.class);
	
	@Autowired
	public CaInfoServiceImp cainfoService;

	@Autowired
	public CaInfoDaoRepository caInfoRepository;
	/**
	 * 分页查询
	 * 我们通过参数获得分页的信息，并通过Sort以及Direction告诉pageable需要通过id逆序排列
	 * @param page
	 * @param size
	 * @return
	 */
	@GetMapping("/get")	
	@ApiOperation(value="查询，带分页",httpMethod = "GET",response = Page.class,notes="加入黑名单 查询信息")
    @ApiImplicitParams(value = {
            @ApiImplicitParam(name = "page", value = "页码",  required = true, dataType = "String"),
            @ApiImplicitParam(name = "size", value = "分页大小", required = true, dataType = "String")
    })
	public ModelAndView getEntryByParams(@RequestParam(value = "page", defaultValue = "0") Integer page,
	        @RequestParam(value = "size", defaultValue = "15") Integer size) {
		logger.info("=====================*****************分页查询=========size"+size+"=page="+page);
		
		if(page < 0){
			page = 0;
		}
	    Sort sort = new Sort(Direction.DESC, "ID");
	    Pageable pageable = new PageRequest(page, size, sort);
	    logger.info("============="+caInfoRepository.findAll(pageable).getContent());
	    HashMap returnList = new HashMap();
	    returnList.put("infoList", caInfoRepository.findAll(pageable).getContent());
	    returnList.put("page", page);
	    returnList.put("size", size);
	    
	    return new ModelAndView("CaInfoList", returnList);
	}

//	@RequestMapping(value = "", method=RequestMethod.GET)
//	public Page<Blog> getEntryByPageable(@PageableDefault(value = 15, sort = { "id" }, direction = Sort.Direction.DESC) 
//	    Pageable pageable) {
//	    return blogRepository.findAll(pageable);
//	}
	
	
	/**
	 * 根据CA唯一ID查看其详细信息
	 * http://localhost:8080/ca/1get
	 * @param id
	 * @return
	 */
	@GetMapping("/{id}")
	@ApiOperation(value=" 根据CA唯一ID查看其详细信息",httpMethod = "GET",response = Map.class,notes=" 根据CA唯一ID查看其详细信息")
	public ModelAndView getById(@ApiParam(required = true,name = "id",value = "CA唯一标识") @PathVariable String id){
		logger.info("=====================*****************查询CA唯一标识=========");
		return new ModelAndView("CaInfo", "info", cainfoService.findByID(id));

	
	}
	
	@GetMapping("/test/1")
	@ApiOperation(value="测试", notes="测试")
	public String test1(){
		return "ttt";
	}
	
	/**
	 * 跳转页面
	 * 处理/ca/的GET请求
	 * @return
	 */

	@GetMapping("/tt")
	@ApiOperation(value="测试注解",httpMethod = "GET",response = Map.class,notes=" 根据CA唯一ID查看其详细信息")
	public void returnJsp(){
		CaInfo ca = new CaInfo();
		ca.setID("CA00001");
		ca.setRemark("测试注解");
		CaInfo result = cainfoService.save(ca);
		System.out.println(result.toString());
	}

	/**
	 * 跳转页面
	 * 处理/ca/的GET请求
	 * @return
	 */
	@ApiIgnore
	@GetMapping("/main")
	public ModelAndView returnMain(){
		ModelAndView mv = new ModelAndView("main");
		return mv;
	}
	
}
