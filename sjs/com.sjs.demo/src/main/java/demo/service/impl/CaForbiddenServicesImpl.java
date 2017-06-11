package demo.service.impl;

import java.sql.Timestamp;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import demo.entity.CaForbindden;
import demo.mapper.CaForbiddenMapper;
import demo.respository.CaForbiddenRepository;
import demo.service.CaForbiddenServices;
/**
 * 
 * @author chenxinxin
 *
 */
@Service
@Transactional
public class CaForbiddenServicesImpl implements CaForbiddenServices{
	
	@Autowired
	private CaForbiddenMapper caForbinddenMapper;

	@Autowired
	private CaForbiddenRepository caForbiddenRepository;
	
	/**
	 * 加入黑名单
	 * @param CaForbindden
	 * @return
	 */
	public boolean addForbidden(CaForbindden CaForbindden){
		boolean resultFlag = true;
		Integer resultInt = caForbinddenMapper.addForbidden(CaForbindden);
		if(resultInt <= 0 ){
			resultFlag = false;
		}
		return resultFlag;
	}


	@Override
	public CaForbindden findByID(String ID) {
		// TODO Auto-generated method stub
		return this.caForbiddenRepository.findByID(ID);
	}


	@Override
	public int updateById (Date forbiddenSince, Date lastUpdateTime, String lastUpdateuser,String id) {
		// TODO Auto-generated method stub
		return this.caForbiddenRepository.updateById(forbiddenSince, lastUpdateTime, lastUpdateuser,id);
	}


	@Override
	public void delete(CaForbindden ca) {
		// TODO Auto-generated method stub
		this.caForbiddenRepository.delete(ca);
	}


	@Override
	public Page<CaForbindden> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return this.caForbiddenRepository.findAll(pageable);
	}


	@Override
	public CaForbindden findOne(String ID) {
		// TODO Auto-generated method stub
		return caForbiddenRepository.findOne(ID);
	}


	@Override
	public CaForbindden save(CaForbindden CaForbindden) {
		// TODO Auto-generated method stub
		return caForbiddenRepository.save(CaForbindden);
	}

}
