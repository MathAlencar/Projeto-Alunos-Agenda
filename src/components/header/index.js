import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaSignInAlt,
} from 'react-icons/fa';

import { Nav, Hamburger, Menu, MenuItem } from './styled';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <h1>Logo</h1>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem onClick={() => setIsOpen(false)}>
          <Link to="/">
            <FaHome size={20} />
          </Link>
        </MenuItem>
        <MenuItem onClick={() => setIsOpen(false)}>
          <Link to="/profile">
            <FaUserAlt size={20} />
          </Link>
        </MenuItem>
        <MenuItem onClick={() => setIsOpen(false)}>
          <Link to="/login">
            <FaSignInAlt size={20} />
          </Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
}
