import { ButtonHTMLAttributes } from 'react';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { api } from '../../services/api';
import './styles.css';

interface NotificationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  saleId: number;
}

export function NotificationButton({
  saleId,
  ...rest
}: NotificationButtonProps) {
  function handleClick(id: number) {
    api.get(`/sales/${id}/notification`).then((response) =>
      toast.info('SMS envidado com sucesso', {
        theme: 'colored',
      })
    );
  }

  return (
    <button
      {...rest}
      className="btn-notification"
      onClick={() => handleClick(saleId)}
    >
      <img src={icon} alt="Notificar" />
    </button>
  );
}
