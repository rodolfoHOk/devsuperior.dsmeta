package br.com.devsuperior.dsmeta.domain.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.devsuperior.dsmeta.domain.entities.Sale;
import br.com.devsuperior.dsmeta.domain.entities.Seller;
import br.com.devsuperior.dsmeta.domain.exceptions.EntityNotFoundException;
import br.com.devsuperior.dsmeta.domain.repositories.SaleRepository;
import br.com.devsuperior.dsmeta.domain.repositories.SellerRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SaleService {
	
	private final SaleRepository saleRepository;
	private final SellerRepository sellerRepository;
	
	public Page<Sale> findSales(String initialDate, String finalDate, Pageable pageable) {
		
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		LocalDate initial = initialDate.equals("") ? today.minusDays(365) : LocalDate.parse(initialDate);
		LocalDate last = finalDate.equals("") ? today : LocalDate.parse(finalDate);
		
		return saleRepository.findSales(initial, last, pageable);
	}

	public Sale create(Sale newSale) {
		Seller foundedSeller = sellerRepository.findById(newSale.getSeller().getId())
				.orElseThrow(() -> new EntityNotFoundException("Sale not found with informed id"));
		
		newSale.setSeller(foundedSeller);
		
		return saleRepository.save(newSale);
	}
	
}
