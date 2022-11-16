package br.com.devsuperior.dsmeta.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.devsuperior.dsmeta.domain.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
