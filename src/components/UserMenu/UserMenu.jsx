import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div>
      <div>Welcome, {user.name}</div>
      <button type="button" onClick={() => dispatch(logOut())}>
        LOGOUT
      </button>
    </div>
  );
};
