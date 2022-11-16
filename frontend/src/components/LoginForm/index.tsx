import { useForm, UseFormErrors } from '../../hooks/useForm';
import { Button } from '../Button';
import { Input } from '../Input';
import './styles.css';

interface LoginFormData {
  user: string;
  password: string;
}

export function LoginForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useForm<LoginFormData>({
      initialValues: {
        user: '',
        password: '',
      },
      validate: (values) => {
        const errors: UseFormErrors<LoginFormData> = {
          user: '',
          password: '',
        };

        if (values.user.trim() === '') {
          errors.user = 'nome de usuário é obrigatório';
        } else if (values.user.trim().length < 3) {
          errors.user = 'nome de usuário deve ter ao menos 3 caracteres';
        }

        if (values.password.trim() === '') {
          errors.password = 'senha é obrigatória';
        } else if (values.password.trim().length < 3) {
          errors.password = 'senha deve ter ao menos 3 caracteres';
        }

        return errors;
      },
      onSubmit: (values, clear, setIsSubmitting) => {
        setTimeout(() => {
          console.log(values);
          clear();
          setIsSubmitting(false);
        }, 1000);
      },
    });

  return (
    <div className="login-form">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="data-inputs">
          <div>
            <label htmlFor="user">Usuário</label>
            <Input
              name="user"
              type="text"
              placeholder="Entre com seu usuário"
              value={values.user}
              onChange={handleChange}
            />
            {errors?.user && <span>* {errors.user}</span>}
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <Input
              name="password"
              type="password"
              placeholder="Entre com sua senha"
              value={values.password}
              onChange={handleChange}
            />
            {errors?.password && <span>* {errors?.password}</span>}
          </div>
        </div>

        <div className="btn-container">
          <Button type="submit" disabled={isSubmitting}>
            Entrar
          </Button>
        </div>
      </form>
    </div>
  );
}
