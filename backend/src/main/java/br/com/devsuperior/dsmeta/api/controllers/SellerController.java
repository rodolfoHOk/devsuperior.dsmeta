package br.com.devsuperior.dsmeta.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.devsuperior.dsmeta.api.controllers.openapi.SellerControllerOpenApi;
import br.com.devsuperior.dsmeta.domain.entities.Seller;
import br.com.devsuperior.dsmeta.domain.services.SellerService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/sellers")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SellerController implements SellerControllerOpenApi {

	private final SellerService sellerService;
	
	@Override
	@GetMapping
	public List<Seller> findAll() {
		return sellerService.findSellers();
	}
	
}
