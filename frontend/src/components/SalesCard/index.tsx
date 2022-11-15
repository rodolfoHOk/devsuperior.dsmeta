import DatePicker from 'react-datepicker';
import { NotificationButton } from '../NotificationButton';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

export function SalesCard() {
  return (
    <div className="sales-card">
      <h2>Vendas</h2>

      <div className="form">
        <DatePicker
          className="date-input"
          selected={new Date()}
          onChange={(date: Date) => {}}
          dateFormat="dd/MM/yyyy"
        />
        <DatePicker
          className="date-input"
          selected={new Date()}
          onChange={(date: Date) => {}}
          dateFormat="dd/MM/yyyy"
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
