import { Resolver } from '@hookform/resolvers/yup';
import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

export type FormProps = {
  methods: UseFormReturn;
} & HookFormProps;

export type HookFormProps = {
  children: ReactNode;
  onSubmit: (data: any) => void;
  resolver?: ReturnType<Resolver>;
};
