import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import { CustomProviders } from 'config/custom-providers';
import reportWebVitals from 'config/reportWebVitals';
import { App } from 'App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <CustomProviders>
      <App />
    </CustomProviders>
  </StrictMode>
);

reportWebVitals();
