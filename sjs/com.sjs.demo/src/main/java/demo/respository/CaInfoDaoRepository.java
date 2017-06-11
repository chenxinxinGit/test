package demo.respository;

import demo.entity.CaInfo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
/**
 * 
 * @author chenxinxin
 *
 */
@Repository
public interface CaInfoDaoRepository extends PagingAndSortingRepository<CaInfo, Integer>{



}
