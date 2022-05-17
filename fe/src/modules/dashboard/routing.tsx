import { Onboarding } from 'modules/onboarding';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

export const DashboardRouting: FC = () => {
  return (
    <Routes>
      <Route {...{ path: '/', element: <Onboarding /> }} />
    </Routes>
  );
};

export const INVOICE_PATH = {
  invoices: (id: string) => `/invoices/${id}`,
};
