import { ButtonHTMLAttributes } from 'react';
import { FaCashRegister } from 'react-icons/fa';
import './styles.css';

interface CashRegisterButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CashRegisterButton(props: CashRegisterButtonProps) {
  return (
    <button {...props} className="btn-cash-register" title="Cadastrar venda">
      <FaCashRegister className="text-blue-400" />
    </button>
  );
}
