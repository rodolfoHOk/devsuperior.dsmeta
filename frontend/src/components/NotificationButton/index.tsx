import { ButtonHTMLAttributes } from 'react';
import icon from '../../assets/img/notification-icon.svg';
import './styles.css';

interface NotificationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function NotificationButton(props: NotificationButtonProps) {
  return (
    <button {...props} className="btn-notification">
      <img src={icon} alt="Notificar" />
    </button>
  );
}
