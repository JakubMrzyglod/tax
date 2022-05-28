import { useUserContext } from 'common/contexts/user';
import { ContentBox } from 'components/content-box';
import { AppBar } from 'modules/dashboard/elements/app-bar';
import { DashboardBox } from 'modules/dashboard/elements/dashboard-box';
import { DashboardRouting } from 'modules/dashboard/routing';
import { FC } from 'react';

export const Dashboard: FC = () => {
  const { logout } = useUserContext();
  return (
    <DashboardBox>
      <AppBar />
      <ContentBox>
        <button {...{ onClick: logout }}>logout !</button>
        <DashboardRouting />
      </ContentBox>
    </DashboardBox>
  );
};
