package demo.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import org.springframework.stereotype.Repository;

import demo.entity.CaInfo;

/**
 * 
 * @author chenxinxin
 *20170520
 */

//声明DAO组件
@Repository
public interface CaInfoRepository  extends JpaRepository<CaInfo,String>{

	/**
	 * 查询CA唯一标识的详细信息
	 * 查询方法以get find read开头
	 */

	//根据ID进行查询
	@Query("from CaInfo where ID = :ID")
	public CaInfo findByID(@Param("ID")String ID);

}
