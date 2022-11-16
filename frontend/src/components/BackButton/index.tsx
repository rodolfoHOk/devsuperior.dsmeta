import { ButtonHTMLAttributes } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import './styles.css';

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function BackButton(props: BackButtonProps) {
  return (
    <button {...props} className="btn-back" title="Voltar">
      <FaArrowLeft className="text-blue-400" />
    </button>
  );
}
