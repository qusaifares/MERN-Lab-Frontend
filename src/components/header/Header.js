import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Link to="/">
      <h2>Contacts</h2>
    </Link>
  );
}

export default Header;
