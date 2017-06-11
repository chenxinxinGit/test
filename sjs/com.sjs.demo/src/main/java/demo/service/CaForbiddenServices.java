package demo.service;

import java.sql.SQLException;
import java.sql.Timestamp;
import java.text.ParseException;
import java.util.Date;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import demo.entity.CaForbindden;


/**
 * 
 * @author chenxinxin
 *
 */

public interface CaForbiddenServices {

	public boolean addForbidden(CaForbindden CaForbindden);
	
	public CaForbindden findByID(String ID);
	
	public CaForbindden findOne(String ID);
	
	int updateById(Date forbiddenSince, Date lastUpdateTime,String lastUpdateuser,String id);
	
	public void delete(CaForbindden ca);
	
	public CaForbindden save(CaForbindden CaForbindden);
	 public Page<CaForbindden> findAll(Pageable pageable);  
}
