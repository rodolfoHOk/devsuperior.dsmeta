import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import '../Input/styles.css';
import './styles.css';
import { Input } from '../Input';
import { Button } from '../Button';
import { useForm, UseFormErrors } from '../../hooks/useForm';

interface Seller {
  id: string;
  name: string;
}

interface SaleFormData {
  date: Date;
  seller_id: string | '';
  visits: number | '';
  sales: number | '';
  total: number | '';
}

export function SalesForm() {
  registerLocale('ptBR', ptBR);

  const [sellers, setSellers] = useState<Seller[]>([
    {
      id: 'abc123',
      name: 'Anakin',
    },
    {
      id: 'def456',
      name: 'Chewbacca',
    },
    {
      id: 'ghi789',
      name: 'Leia',
    },
  ]);

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
      visits: '',
      sales: '',
      total: '',
    },
    validate: (values) => {
      let errors: UseFormErrors<SaleFormData> = {
        date: '',
        seller_id: '',
        visits: '',
        sales: '',
        total: '',
      };

      if (!values.date) {
        errors.date = 'data é obrigatória';
      } else if (!(values.date instanceof Date)) {
        errors.date = 'formato da data inválido';
      }

      if (!values.seller_id) {
        errors.seller_id = 'selecione um vendedor';
      }

      if (!values.visits) {
        errors.visits = 'número de visitas é obrigatório';
      } else if (isNaN(values.visits)) {
        errors.visits = 'número de visitas deve ser um número';
      } else if (!Number.isInteger(Number(values.visits))) {
        errors.visits = 'número de visitas deve ser um número inteiro';
      } else if (values.visits <= 0) {
        errors.visits = 'número de visitas deve ser maior que zero';
      }

      if (!values.sales) {
        errors.sales = 'número de vendas é obrigatório';
      } else if (isNaN(values.sales)) {
        errors.sales = 'número de vendas deve ser um número';
      } else if (!Number.isInteger(Number(values.sales))) {
        console.log('values.sales', values.sales);
        errors.sales = 'número de vendas deve ser um número inteiro';
      } else if (values.sales <= 0) {
        errors.sales = 'número de vendas deve ser maior que zero';
      }

      if (!values.total) {
        errors.total = 'valor total é obrigatório';
      } else if (isNaN(values.total)) {
        errors.total = 'total de vendas deve ser um número';
      } else if (values.total <= 0) {
        errors.total = 'valor total deve ser maior que zero';
      }
      return errors;
    },
    onSubmit: (values, clear, setIsSubmitting) => {
      setTimeout(() => {
        console.log(values);
        clear();
        setIsSubmitting(false);
      }, 1000);
    },
  });

  return (
    <div className="sales-form">
      <h2>Cadastro de vendas</h2>

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
              name="visits"
              type="text"
              placeholder="Número de visitas"
              value={values.visits}
              onChange={handleChange}
            />
            {errors?.visits && <span>* {errors.visits}</span>}
          </div>

          <div>
            <label htmlFor="sales">Vendas</label>
            <Input
              name="sales"
              type="text"
              placeholder="Número de vendas"
              value={values.sales}
              onChange={handleChange}
            />
            {errors?.sales && <span>* {errors.sales}</span>}
          </div>

          <div>
            <label htmlFor="total">Total (R$)</label>
            <Input
              name="total"
              type="text"
              placeholder="Valor total"
              value={values.total}
              onChange={handleChange}
            />
            {errors?.total && <span>* {errors.total}</span>}
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
