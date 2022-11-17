package br.com.devsuperior.dsmeta.api.controllers.openapi;

import org.springdoc.core.converters.models.PageableAsQueryParam;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.com.devsuperior.dsmeta.api.dto.SaleInputDTO;
import br.com.devsuperior.dsmeta.domain.entities.Sale;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Sales")
public interface SaleControllerOpenApi {

	@Operation(summary = "Search sales between dates")
	@PageableAsQueryParam
	Page<Sale> findAll(String initialDate, String finalDate, @Parameter(hidden = true) Pageable pageable);

	@Operation(summary = "Send SMS notification by sale id")
	void notifySms(Long id);

	@Operation(summary = "Register new sale")
	Sale create(SaleInputDTO saleInput);

}