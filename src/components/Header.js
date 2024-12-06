import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
  const [loginLogoutBtn, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact_us">Contact us</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>

          <button
            className="login-logout"
            onClick={() => {
              loginLogoutBtn === 'Login'
                ? setBtnName('Logout')
                : setBtnName('Login');
            }}
          >
            {loginLogoutBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
