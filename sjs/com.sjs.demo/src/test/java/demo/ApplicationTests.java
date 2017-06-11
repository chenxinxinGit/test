package demo;


import static org.junit.Assert.*;

import java.util.HashMap;
import java.util.regex.Pattern;

import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.ContextHierarchy;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.WebApplicationContext;

import demo.controller.CainfoSearchController;
import demo.entity.CaForbindden;
import demo.entity.CaInfo;
import demo.service.impl.CaForbiddenServicesImpl;
/**
 * 测试类
 * @author chenxinxinx
 *
 */
import demo.service.impl.CaInfoServiceImp;
@RunWith(SpringJUnit4ClassRunner.class)  
@SpringBootTest(classes = Application.class) 
@WebAppConfiguration

public class ApplicationTests {
    @Autowired  
    private CainfoSearchController controller;  
  

    private MockMvc mvc;  

	@Autowired
	CaForbiddenServicesImpl service;
	
	@Autowired
	CaInfoServiceImp caService;
	@Test
	public void caInfoTest(){
		
		CaForbindden ca=service.findByID("CA00001");
		System.out.println(ca.getCreateUser());
	}
	
	@Test
	public void contextLoads() throws Exception {
		String uri="/cainfo/test/1";
		//测试CainfoSearchController
 
		
		
		  MvcResult result = mvc.perform(  
	                MockMvcRequestBuilders.get(uri)  
	                        .accept(MediaType.APPLICATION_JSON))  
	                        .andReturn();  
	        int statusCode = result.getResponse().getStatus();  
	        Assert.assertEquals(statusCode, 200);  
	        String body = result.getResponse().getContentAsString();  
	        System.out.println("body:"+body);  
	}


		/**
		 *  使用Junit测试HTTP的API接口
		 */
    private TestRestTemplate template = new TestRestTemplate();
    
          @Value("8080")// 注入端口号
           private int port;

		@Test
	    public void test3(){
	        String url = "http://localhost:"+port+"/cainfo/test/1";
	        MultiValueMap<String, Object> map = new LinkedMultiValueMap<String, Object>(); 
	        map.add("name", "Tom");  
	        map.add("name1", "Lily");
	        //return template.postForObject(url + "add.do?user={user}", null, String.class, user);
	        //postForObject(url, map, String.class); 发送一个post请求 map为传入的参数，String.class为返回的值类型
	        String result = template.postForObject(url, map, String.class);	       
	        System.out.println(result);
	        assertNotNull(result);
	        assertThat(result, Matchers.containsString("Tom"));
	        
	         template.getForObject(url + "show.do", String.class,"");
	         HashMap masp=new HashMap();
	 
	    }

		@Test
		public void saveCaForbinddenTest(){
			CaInfo ca = new CaInfo();
			ca.setID("CA00001");
			ca.setRemark("测试注解");
			CaInfo result = caService.save(ca);
			System.out.println(result.toString());
		}
	
}
