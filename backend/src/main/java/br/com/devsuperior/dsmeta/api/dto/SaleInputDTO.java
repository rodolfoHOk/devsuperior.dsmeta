package br.com.devsuperior.dsmeta.api.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SaleInputDTO {

	@NotNull
	@Positive
	private Integer visited;
	
	@NotNull
	@Positive
	private Integer deals;
	
	@NotNull
	@Positive
	private BigDecimal amount;
	
	@NotNull
	private LocalDate date;
	
	@NotNull
	@Valid
	private SellerIdInputDTO seller;
	
}
