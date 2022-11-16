package br.com.devsuperior.dsmeta.domain.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.devsuperior.dsmeta.domain.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, UUID>{

}
