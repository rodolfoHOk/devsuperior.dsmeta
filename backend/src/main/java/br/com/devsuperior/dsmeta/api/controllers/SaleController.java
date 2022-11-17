package br.com.devsuperior.dsmeta.api.controllers;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.devsuperior.dsmeta.api.controllers.openapi.SaleControllerOpenApi;
import br.com.devsuperior.dsmeta.api.dto.SaleInputDTO;
import br.com.devsuperior.dsmeta.domain.entities.Sale;
import br.com.devsuperior.dsmeta.domain.services.SaleService;
import br.com.devsuperior.dsmeta.domain.services.SmsService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(value = "/sales")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SaleController implements SaleControllerOpenApi {
	
	private final SaleService saleService;
	private final SmsService smsService;
	private final ModelMapper modelMapper;
	
	@Override
	@GetMapping
	public Page<Sale> findAll(
			@RequestParam(value = "initialDate", defaultValue = "") String initialDate, 
			@RequestParam(value = "finalDate", defaultValue = "") String finalDate, 
			Pageable pageable) {
		return saleService.findSales(initialDate, finalDate, pageable);
	}
	
	@Override
	@GetMapping("/{id}/notification")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void notifySms(@PathVariable Long id) {
		smsService.SendSms(id);
	}
	
	@Override
	@PostMapping
	public Sale create(@RequestBody @Valid SaleInputDTO saleInput) {
		Sale newSale = modelMapper.map(saleInput, Sale.class);
		return saleService.create(newSale);
	}
	
}
