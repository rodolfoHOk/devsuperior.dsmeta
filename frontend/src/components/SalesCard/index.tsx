import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { NotificationButton } from '../NotificationButton';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
import '../Input/styles.css';

export function SalesCard() {
  registerLocale('ptBR', ptBR);

  const minDate = new Date(new Date().setDate(new Date().getDate() - 365));
  const maxDate = new Date();

  const [initialDate, setInitialDate] = useState(minDate);
  const [finalDate, setFinalDate] = useState(maxDate);

  return (
    <div className="sales-card">
      <h2>Vendas</h2>

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
            <tr>
              <td className="show-lg">{'#' + '341'}</td>
              <td className="show-md">{'28/06/2022'}</td>
              <td>{'Anakin'}</td>
              <td className="show-lg">{'15'}</td>
              <td className="show-lg">{'11'}</td>
              <td>{'R$ 55300.00'}</td>
              <td>
                <div className="btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>

            <tr>
              <td className="show-lg">{'#' + '341'}</td>
              <td className="show-md">{'28/06/2022'}</td>
              <td>{'Anakin'}</td>
              <td className="show-lg">{'15'}</td>
              <td className="show-lg">{'11'}</td>
              <td>{'R$ 55300.00'}</td>
              <td>
                <div className="btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>

            <tr>
              <td className="show-lg">{'#' + '341'}</td>
              <td className="show-md">{'28/06/2022'}</td>
              <td>{'Anakin'}</td>
              <td className="show-lg">{'15'}</td>
              <td className="show-lg">{'11'}</td>
              <td>{'R$ 55300.00'}</td>
              <td>
                <div className="btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
