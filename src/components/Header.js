import { useState, useContext } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/userContext';

const Header = () => {
  const [loginLogoutBtn, setBtnName] = useState('Login');

  const onlineStatus = useOnlineStatus();

  // const { loggedInUser } = useContext(UserContext);

  return (
    <div className="header flex justify-between bg-gray-300 shadow-lg p-2">
      <div className="logo-container">
        <img className="logo w-24" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4 gap-3 ">
          <li className="mr-10">Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
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

          {/* <li className="font-bold"> {loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
