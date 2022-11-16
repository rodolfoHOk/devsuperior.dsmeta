package br.com.devsuperior.dsmeta.domain.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.devsuperior.dsmeta.domain.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

	@Query("select s from Sale s where s.date between :initial and :last order by s.amount desc")
	Page<Sale> findSales(LocalDate initial, LocalDate last, Pageable pageable);
	
}
