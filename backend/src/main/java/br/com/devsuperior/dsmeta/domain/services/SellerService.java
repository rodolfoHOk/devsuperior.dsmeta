package br.com.devsuperior.dsmeta.domain.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devsuperior.dsmeta.domain.entities.Seller;
import br.com.devsuperior.dsmeta.domain.repositories.SellerRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SellerService {

	private final SellerRepository sellerRepository;
	
	public List<Seller> findSellers() {
		return sellerRepository.findAll();
	}
	
}
