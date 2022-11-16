package br.com.devsuperior.dsmeta.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.devsuperior.dsmeta.domain.entities.Sale;
import br.com.devsuperior.dsmeta.domain.services.SaleService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(value = "/sales")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SaleController {
	
	private final SaleService saleService;
	
	@GetMapping
	public List<Sale> findAll() {
		return saleService.findSales();
	}
	
}
