import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

export const DashboardRouting: FC = () => {
  return (
    <Routes>
      <Route {...{ path: '/', element: <>dashboard</> }} />
    </Routes>
  );
};

export const INVOICE_PATH = {
  invoices: (id: string) => `/invoices/${id}`,
};
