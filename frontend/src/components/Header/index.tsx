import logo from '../../assets/img/logo.svg';
import './styles.css';

export function Header() {
  return (
    <header className="header">
      <img src={logo} alt="imagem do logo" />
      <h1>DS Meta</h1>
      <p>Desenvolvido por HiOk Dev</p>
    </header>
  );
}
