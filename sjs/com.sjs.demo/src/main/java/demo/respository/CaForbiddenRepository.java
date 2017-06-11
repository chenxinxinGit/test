package demo.respository;

import java.sql.Timestamp;
import java.util.Date;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import demo.entity.CaForbindden;

/**
 * 
 * @author chenxinxin
 *
 */
@Repository
public interface CaForbiddenRepository extends JpaRepository<CaForbindden,String>{


	/**
	 * 查询CA唯一标识的详细信息
	 * 查询方法以get find read开头
	 */

	//根据ID进行查询
	@Query("from CaForbindden where ID = :ID")
	public CaForbindden findByID(@Param("ID")String ID);
	
	public CaForbindden findOne(String ID);
    // @Modifying                            更新之后不清空缓存，在一个事务里查询到旧数据(hibernate)  
	// @Modifying(clearAutomatically = true) 更新之后清空缓存，不保留旧对象(hibernate) 
	@Modifying(clearAutomatically = true) 
	@Query("update CaForbindden c set c.forbiddenSince =:forbiddenSince,c.lastUpdateTime = :lastUpdateTime,c.lastUpdateuser = :lastUpdateuser,c.rowState = 1 where c.ID = :ID")  
	public int updateById(@Param("forbiddenSince") Date forbiddenSince, @Param("lastUpdateTime") Date lastUpdateTime,@Param("lastUpdateuser") String lastUpdateuser,@Param("ID") String ID);
	

	public void delete(CaForbindden ca);
	

	
}
