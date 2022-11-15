import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

export type UseFormErrors<T> = {
  [K in keyof T]: string;
};

interface UseFormData<T> {
  initialValues: T;
  validate: (values: T) => UseFormErrors<T>;
  onSubmit: (
    values: T,
    clear: () => void,
    setIsSubmitting: Dispatch<SetStateAction<boolean>>
  ) => void;
}

export function useForm<T>({
  initialValues,
  validate,
  onSubmit,
}: UseFormData<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<UseFormErrors<T> | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function clear() {
    setValues(initialValues);
  }

  function setFieldValue(field: string, value: any) {
    setValues({ ...values, [field]: value });
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const fieldName = event.target.name;
    setValues({ ...values, [fieldName]: event.target.value });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  }

  useEffect(() => {
    if (isSubmitting) {
      let hasError = false;
      for (let key in errors) {
        if (errors[key] !== '') hasError = true;
      }
      if (!hasError) onSubmit(values, clear, setIsSubmitting);
      else setIsSubmitting(false);
    }
  }, [errors]);

  return {
    values,
    errors,
    isSubmitting,
    clear,
    setFieldValue,
    handleChange,
    handleSubmit,
  };
}
