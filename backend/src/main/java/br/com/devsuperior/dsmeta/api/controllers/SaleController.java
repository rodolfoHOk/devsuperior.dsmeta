package br.com.devsuperior.dsmeta.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.devsuperior.dsmeta.domain.entities.Sale;
import br.com.devsuperior.dsmeta.domain.services.SaleService;
import br.com.devsuperior.dsmeta.domain.services.SmsService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(value = "/sales")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SaleController {
	
	private final SaleService saleService;
	private final SmsService smsService;
	
	@GetMapping
	public Page<Sale> findAll(
			@RequestParam(value = "initialDate", defaultValue = "") String initialDate, 
			@RequestParam(value = "finalDate", defaultValue = "") String finalDate, 
			Pageable pageable) {
		return saleService.findSales(initialDate, finalDate, pageable);
	}
	
	@GetMapping("/{id}/notification")
	public void notifySms(@PathVariable Long id) {
		smsService.SendSms(id);
	}
	
}
