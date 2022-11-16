package br.com.devsuperior.dsmeta.domain.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import br.com.devsuperior.dsmeta.domain.entities.Sale;
import br.com.devsuperior.dsmeta.domain.exceptions.EntityNotFoundException;
import br.com.devsuperior.dsmeta.domain.repositories.SaleRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class SmsService {
	
	private final SaleRepository saleRepository;
	
	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;
	
	public void SendSms(Long saleId) {
		Sale sale = saleRepository.findById(saleId)
				.orElseThrow(() -> new EntityNotFoundException("Sale not found with informed id"));
		
		String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();
		
		String msg = new StringBuilder("O Vendedor ")
				.append(sale.getSeller().getName())
				.append(" foi destaque em ")
				.append(date)
				.append(" com um total de R$ ")
				.append(String.format("%.2f", sale.getAmount()))
				.toString();
		
		Twilio.init(twilioSid, twilioKey);
		
		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);
		
		Message message = Message.creator(to, from, msg).create();
		
		System.out.println(message.getSid());	
	}
}
