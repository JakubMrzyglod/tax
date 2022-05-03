import { useUserContext } from 'common/contexts/user';

export const App = () => {
  const { logout } = useUserContext();
  return (
    <>
      <button {...{ onClick: logout }}>logout!</button>
    </>
  );
};
