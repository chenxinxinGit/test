package demo.mapper;


import demo.entity.CaForbindden;

/**
 * 
 * @author chenxinxin
 *
 */
public interface CaForbiddenMapper {

	/**
	 * 加入黑名单
	 * @param CaForbindden
	 * @return
	 */


	public Integer addForbidden(CaForbindden CaForbindden);

}
