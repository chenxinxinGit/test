package demo.respository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import demo.entity.CaForbindden;


@Repository
public interface CaForbiddenDaoRepository extends PagingAndSortingRepository<CaForbindden, Integer>{
	 public Page<CaForbindden> findAll(Pageable pageable);  
}
