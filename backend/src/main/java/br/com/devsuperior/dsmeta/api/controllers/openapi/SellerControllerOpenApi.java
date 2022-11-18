package br.com.devsuperior.dsmeta.api.controllers.openapi;

import java.util.List;

import br.com.devsuperior.dsmeta.domain.entities.Seller;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Sellers")
public interface SellerControllerOpenApi {

	@Operation(summary = "List all sellers")
	List<Seller> findAll();

}