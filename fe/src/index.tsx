import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import { CustomProviders } from 'config/custom-providers';
import reportWebVitals from 'config/reportWebVitals';
import { Dashboard } from './modules/dashboard';
import { BrowserRouter } from 'react-router-dom';
import { Onboarding } from 'modules/onboarding';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <CustomProviders>
        <Onboarding />
        {/* <Dashboard /> */}
      </CustomProviders>
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
