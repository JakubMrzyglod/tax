import { AppBarBox } from 'modules/dashboard/elements/app-bar/app-bar-box';
import { AppBarItem } from 'modules/dashboard/elements/app-bar/app-bar-item';
import { INVOICE_PATH } from 'modules/dashboard/routing';
import { useNavigate } from 'react-router-dom';

export const AppBar = () => {
  const navigate = useNavigate();
  const onClick = () => navigate(INVOICE_PATH.invoices('new'));
  return (
    <AppBarBox>
      <AppBarItem {...{ text: 'Add invoice', onClick }} />
      <AppBarItem {...{ text: 'aaaaaaa' }} />
    </AppBarBox>
  );
};
