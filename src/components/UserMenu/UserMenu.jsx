import { useAuth } from 'components/Hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperation';
import c from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={c.wrapper}>
      <p className={c.username}>
        Welcome, <span className={c.logInUser}>{user.name}!</span>
      </p>
      <button
        className={c.btnLogin}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};
