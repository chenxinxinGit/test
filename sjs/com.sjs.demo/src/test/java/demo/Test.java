package demo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.BeanUtils;
import org.yaml.snakeyaml.introspector.PropertyUtils;

import demo.entity.CaInfo;
import springfox.documentation.spring.web.json.Json;

public class Test {

	public static void main(String[] args) {
		JSONArray json=new JSONArray();
		JSONObject object = new JSONObject();
		try {
			object.put("page", 1);
			object.put("rows", 2);
			object.put("sort", "ID");
			object.put("order", "desc");
			System.out.println(object.toString());
			
			CaInfo ca = new CaInfo();
			ca.setID("123");
			ca.setUserName("sfdsadf");
			CaInfo cc = new CaInfo();
			cc.setID("ss");
			BeanUtils.copyProperties(ca, cc);
			System.out.println(cc.getUserName()+""+cc.getID());
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		SimpleDateFormat formats = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		Date d= new Date();
		
	    String date = formats.format(d);
	    Date s;
		try {
			s = formats.parse(date);
           String t=formats.format(d);
			System.out.println(date);
			System.out.println(date.compareTo(t));
			System.out.println(t);
			String st="2017-05-27 05:16:48";
			String ct="2017-05-27 17:16:48";
			System.out.println(st.compareTo(ct));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			
	

	}
}
