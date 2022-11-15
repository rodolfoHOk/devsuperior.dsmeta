import { ButtonHTMLAttributes } from 'react';
import './styles.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return <button className="app-button" {...props}></button>;
}
