package demo.exception;

import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;
import java.text.ParseException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 
 * @author Administrator
 * 1.新建一个Class
 * 在Class上添加注解@ControllerAdvice
 * 在class中添加一个方法
 * 在方法上添加@@ExceptionHandler 拦截相应的异常信息
 * 如果返回的是View 方法的返回值是ModelAdnView
 * 如果返回的是String或者Json数据，需要在方法上添加@@ResponseBody注解
 * ParseException
 *
 */
@ControllerAdvice
public class GlobalDefaultExceptionHandler {



	/**
	 * SQL异常
	 * 当被调用的方法的内部抛出了异常而没有被捕获时，将由此异常接收。
	 * @param e
	 * @param response
	 * @return
	 */
	@ExceptionHandler(Exception.class)
	@ResponseBody
	   public MyExceptionResponse sqlExceptionHandler(Exception e, HttpServletResponse response) {
	      MyExceptionResponse resp = new MyExceptionResponse();
		       resp.setCode(300);
		       resp.setMsg(e.getMessage());
		        return resp;
    }
	/**
	 * 运行时异常
	 * @param e
	 * @param response
	 * @return
	 */
	@ExceptionHandler(RuntimeException.class)
	@ResponseBody
	   public MyExceptionResponse exceptionHandler(RuntimeException e, HttpServletResponse response) {
	      MyExceptionResponse resp = new MyExceptionResponse();
		       resp.setCode(300);
		       resp.setMsg(e.getMessage());
	
		        return resp;
    }
	

}
