package demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import demo.entity.CaInfo;
import demo.respository.CaInfoDaoRepository;
import demo.respository.CaInfoRepository;
import demo.service.CainfoService;

/**
 * 
 * @author chenxinxin
 *
 */
@Service
@Transactional
public class CaInfoServiceImp  implements CainfoService{

	
	@Autowired
	public CaInfoRepository caInfoRepository;
	

	/**
	 * 通过Id查询Ca详细信息
	 */
	@Override
	public CaInfo findByID(String ID) {
		// TODO Auto-generated method stub
		return this.caInfoRepository.findByID(ID);
	}

	/**
	 * 查询所有Ca详细信息
	 */
	@Override
	public List<CaInfo> findAll() {
		// TODO Auto-generated method stub
		return this.caInfoRepository.findAll();
	}
	
	public CaInfo save(CaInfo ca){
		CaInfo re = caInfoRepository.findByID(ca.getID());
		re.setID(ca.getID());
		re.setRemark(ca.getRemark());
		return caInfoRepository.save(re);
		
	}

}
