# 🚀 Semana Spring React / Backend 🚀

> DevSuperior

## 👨‍💻 Principais Tecnologias 👩‍💻

- Java
- Spring Boot
- H2 Database
- Twilio SMS

### 📚 Bibliotecas adicionais 🗃️

- Java 17
- Spring WEB
- Spring Security
- Spring Data JPA
- H2 Database
- twilio (sdk)
- Lombok
- Spring Dev Tools
- Spring I/O Validation
- ModelMapper
- Springdoc OpenAPI UI

## ➕ O que fiz além ✨

- Usei o Lombok
- Criei entidade user
- Criei entidade seller e substitui o seller_name da entidade sale pela entidade seller
- Criei repositórios de user e seller
- Criei end-point de criação de venda (sale)
- Usei o ModelMapper para mapeamento de DTO para Entidade
- Usei o Spring I/O validation para validar o DTO
- Adicionei documentação OpenAPI (Swagger UI)
- Adicionei end-point para listagem dos vendedores (sellers)

## 🔥 Build and Run 🏃

- ./mvnw package -Dmaven.test.skip
- set environment variables: export TWILIO_KEY= TWILIO_PHONE_FROM= TWILIO_PHONE_TO= TWILIO_SID=
- java -jar target/dsmeta-0.0.1-SNAPSHOT.jar
