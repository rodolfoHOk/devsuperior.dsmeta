package br.com.devsuperior.dsmeta.domain.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.devsuperior.dsmeta.domain.entities.Sale;
import br.com.devsuperior.dsmeta.domain.repositories.SaleRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SaleService {
	
	private final SaleRepository saleRepository;
	
	public Page<Sale> findSales(String initialDate, String finalDate, Pageable pageable) {
		
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		LocalDate initial = initialDate.equals("") ? today.minusDays(365) : LocalDate.parse(initialDate);
		LocalDate last = finalDate.equals("") ? today : LocalDate.parse(finalDate);
		
		return saleRepository.findSales(initial, last, pageable);
	}
	
}
