// Navbar.js
import React, { useContext } from 'react';
import  AuthContext  from '../context/AuthContext';
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <p>Welcome, {user ? user.name : 'Guest'}</p>
      {user && <button onClick={logout}>Logout</button>}

    </div>
  );
};

export default Navbar;
