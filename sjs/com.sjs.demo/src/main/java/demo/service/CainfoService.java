package demo.service;


import java.util.List;

import demo.entity.CaInfo;


public interface CainfoService {

	public CaInfo findByID(String ID) ;
	
	public List<CaInfo> findAll();
}
