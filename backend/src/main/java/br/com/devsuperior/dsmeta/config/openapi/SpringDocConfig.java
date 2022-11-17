package br.com.devsuperior.dsmeta.config.openapi;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.tags.Tag;

@Configuration
public class SpringDocConfig {

	@Bean
	public OpenAPI openAPI() {
		return new OpenAPI()
				.info(new Info()
						.title("DS Meta")
						.version("v1")
						.description("REST API DS Meta")
				)
				.tags(Arrays.asList(
					new Tag().name("Sales").description("Management sales")
				));
	}
}
