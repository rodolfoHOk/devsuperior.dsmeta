import icon from '../../assets/img/notification-icon.svg';
import './styles.css';

export function NotificationButton() {
  return (
    <button className="btn-notification">
      <img src={icon} alt="Notificar" />
    </button>
  );
}
