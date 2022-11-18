import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import '../Input/styles.css';
import './styles.css';
import { Input } from '../Input';
import { Button } from '../Button';
import { BackButton } from '../BackButton';
import { useForm, UseFormErrors } from '../../hooks/useForm';
import { Seller } from '../../models/seller';
import { api } from '../../services/api';
import { SaleInput } from '../../models/saleInput';
import { Sale } from '../../models/sale';
import { toast } from 'react-toastify';

interface SaleFormData {
  date: Date;
  seller_id: string | '';
  visited: number | '';
  deals: number | '';
  amount: number | '';
}

export function SalesForm() {
  registerLocale('ptBR', ptBR);

  const navigate = useNavigate();

  const [sellers, setSellers] = useState<Seller[]>([]);

  const {
    values,
    errors,
    isSubmitting,
    clear,
    setFieldValue,
    handleChange,
    handleSubmit,
  } = useForm<SaleFormData>({
    initialValues: {
      date: new Date(),
      seller_id: '',
      visited: '',
      deals: '',
      amount: '',
    },
    validate: (values) => {
      let errors: UseFormErrors<SaleFormData> = {
        date: '',
        seller_id: '',
        visited: '',
        deals: '',
        amount: '',
      };

      if (!values.date) {
        errors.date = 'data é obrigatória';
      } else if (!(values.date instanceof Date)) {
        errors.date = 'formato da data inválido';
      }

      if (!values.seller_id) {
        errors.seller_id = 'selecione um vendedor';
      }

      if (!values.visited) {
        errors.visited = 'número de visitas é obrigatório';
      } else if (isNaN(values.visited)) {
        errors.visited = 'número de visitas deve ser um número';
      } else if (!Number.isInteger(Number(values.visited))) {
        errors.visited = 'número de visitas deve ser um número inteiro';
      } else if (values.visited <= 0) {
        errors.visited = 'número de visitas deve ser maior que zero';
      }

      if (!values.deals) {
        errors.deals = 'número de vendas é obrigatório';
      } else if (isNaN(values.deals)) {
        errors.deals = 'número de vendas deve ser um número';
      } else if (!Number.isInteger(Number(values.deals))) {
        console.log('values.deals', values.deals);
        errors.deals = 'número de vendas deve ser um número inteiro';
      } else if (values.deals <= 0) {
        errors.deals = 'número de vendas deve ser maior que zero';
      }

      if (!values.amount) {
        errors.amount = 'valor total é obrigatório';
      } else if (isNaN(values.amount)) {
        errors.amount = 'total de vendas deve ser um número';
      } else if (values.amount <= 0) {
        errors.amount = 'valor total deve ser maior que zero';
      }
      return errors;
    },
    onSubmit: async (values, clear, setIsSubmitting) => {
      const saleInput: SaleInput = {
        date: values.date.toISOString().slice(0, 10),
        visited: values.visited as number,
        deals: values.deals as number,
        amount: values.amount as number,
        seller: {
          id: values.seller_id,
        },
      };

      const response = await api.post<Sale>('/sales', saleInput, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.id) {
        toast.success('Venda cadastrada com sucesso', {
          theme: 'colored',
        });
      }

      clear();
      setIsSubmitting(false);
    },
  });

  useEffect(() => {
    api.get<Seller[]>('/sellers').then((response) => {
      response.data.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );

      setSellers(response.data);
    });
  }, []);

  return (
    <div className="sales-form">
      <h2>Cadastro de vendas</h2>

      <div className="back-btn-container">
        <BackButton onClick={() => navigate('/')} />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="data-inputs">
          <div>
            <label htmlFor="date">Data</label>
            <DatePicker
              name="date"
              className="app-input"
              locale="ptBR"
              dateFormat="dd/MM/yyyy"
              selected={values.date}
              onChange={(date: Date) => setFieldValue('date', date)}
            />
            {errors?.date && <span>* {errors.date}</span>}
          </div>

          <div>
            <label htmlFor="seller_id">Vendedor</label>
            <select
              name="seller_id"
              className="app-input"
              value={values.seller_id}
              onChange={handleChange}
            >
              <option value="" disabled>
                Selecione o vendedor...
              </option>
              {sellers.map((seller) => (
                <option key={seller.id} value={seller.id}>
                  {seller.name}
                </option>
              ))}
            </select>
            {errors?.seller_id && <span>* {errors.seller_id}</span>}
          </div>

          <div>
            <label htmlFor="visits">Visitas</label>
            <Input
              name="visited"
              type="text"
              placeholder="Número de visitas"
              value={values.visited}
              onChange={handleChange}
            />
            {errors?.visited && <span>* {errors.visited}</span>}
          </div>

          <div>
            <label htmlFor="sales">Vendas</label>
            <Input
              name="deals"
              type="text"
              placeholder="Número de vendas"
              value={values.deals}
              onChange={handleChange}
            />
            {errors?.deals && <span>* {errors.deals}</span>}
          </div>

          <div>
            <label htmlFor="total">Total (R$)</label>
            <Input
              name="amount"
              type="text"
              placeholder="Valor total"
              value={values.amount}
              onChange={handleChange}
            />
            {errors?.amount && <span>* {errors.amount}</span>}
          </div>
        </div>

        <div className="btn-container">
          <Button type="button" disabled={isSubmitting} onClick={clear}>
            Limpar
          </Button>

          <Button type="submit" disabled={isSubmitting}>
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  );
}
