import { FormProps, HookFormProps } from 'components/form/types';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export const Form: FC<FormProps> = ({ children, methods, onSubmit }) => {
  onSubmit = methods.handleSubmit(onSubmit);
  return (
    <FormProvider {...methods}>
      <form {...{ onSubmit }}>{children}</form>
    </FormProvider>
  );
};

export const HookForm: FC<HookFormProps> = ({ resolver, ...props }) => {
  const methods = useForm({ resolver });

  return <Form {...{ methods, ...props }} />;
};
