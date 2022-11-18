import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { CashRegisterButton } from '../CashRegisterButton';
import { NotificationButton } from '../NotificationButton';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
import '../Input/styles.css';

import { api } from '../../services/api';
import { Sale } from '../../models/sale';
import { Page } from '../../models/page';

export function SalesCard() {
  registerLocale('ptBR', ptBR);

  const navigate = useNavigate();

  const minDate = new Date(new Date().setDate(new Date().getDate() - 365));
  const maxDate = new Date();

  const [initialDate, setInitialDate] = useState(minDate);
  const [finalDate, setFinalDate] = useState(maxDate);

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const iDate = initialDate.toISOString().slice(0, 10);
    const fDate = finalDate.toISOString().slice(0, 10);

    api
      .get<Page<Sale>>(`/sales?initialDate=${iDate}&finalDate=${fDate}`)
      .then((response) => setSales(response.data.content));
  }, [initialDate, finalDate]);

  return (
    <div className="sales-card">
      <h2>Vendas</h2>

      <div className="add-sale">
        <CashRegisterButton onClick={() => navigate('/cadastro')} />
      </div>

      <div className="form">
        <DatePicker
          className="app-input"
          locale="ptBR"
          dateFormat="dd/MM/yyyy"
          selected={initialDate}
          onChange={(date: Date) => setInitialDate(date)}
        />

        <DatePicker
          className="app-input"
          locale="ptBR"
          dateFormat="dd/MM/yyyy"
          selected={finalDate}
          onChange={(date: Date) => setFinalDate(date)}
        />
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th className="show-lg">ID</th>
              <th className="show-md">Data</th>
              <th>Vendedor</th>
              <th className="show-lg">Visitas</th>
              <th className="show-lg">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>

          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id}>
                <td className="show-lg">{sale.id}</td>
                <td className="show-md">
                  {new Date(sale.date).toLocaleDateString()}
                </td>
                <td>{sale.seller.name}</td>
                <td className="show-lg">{sale.visited}</td>
                <td className="show-lg">{sale.deals}</td>
                <td>{`R$ ${sale.amount.toFixed(2)}`}</td>
                <td>
                  <div className="btn-container">
                    <NotificationButton saleId={sale.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
