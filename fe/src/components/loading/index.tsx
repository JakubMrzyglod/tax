import { Spinner } from 'components/loading/spinner';
import { Backdrop } from 'components/backdrop';
import { LoadingFC } from 'components/loading/types';

export const Loading: LoadingFC = ({ show }) =>
  show ? (
    <Backdrop>
      <Spinner />
    </Backdrop>
  ) : null;
