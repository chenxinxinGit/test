package demo.controller;

import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import demo.entity.CaForbindden;
import demo.service.impl.CaForbiddenServicesImpl;

/**
 * 
 * @author chenxinxin
 *
 */

@RestController
@RequestMapping(value="/ex")
public class ExceptionController {

	@Autowired
	public CaForbiddenServicesImpl caForbiddenService;
	
	private static final Logger logger = LoggerFactory.getLogger(CaForbinddenController.class);
	@GetMapping("/run")
	public String test1(){
		 throw new RuntimeException("解析失败");
	}
	
	@GetMapping("/sql")
	public String sql() throws SQLException{
		CaForbindden caForbindden = new CaForbindden();
	    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:MM:SS");
	    try{
		caForbiddenService.updateById(format.parse(caForbindden.getForbiddenSince()), format.parse(caForbindden.getForbiddenSince()), caForbindden.getLastUpdateuser(),caForbindden.getID());
	    }catch (Exception ex){
    	throw new SQLException("数据处理失败，情重新确认");
	    } 
		throw new RuntimeException("解析失败");
	}
}
