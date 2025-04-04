import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaSignInAlt,
  FaUserEdit,
  FaUserPlus,
  FaPowerOff,
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Nav, Hamburger, Menu, MenuItem } from './styled';
import * as Actions from '../../store/modules/auth/actions';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedI = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(Actions.LogOut());
    toast.info('deslogando do sistema.');
    window.location.href = '/login';
  };

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
          <Link to="/Aluno">
            <FaUserAlt size={20} />
          </Link>
        </MenuItem>
        <MenuItem onClick={() => setIsOpen(false)}>
          <Link to="/register">
            {isLoggedI ? <FaUserEdit size={25} /> : <FaUserPlus size={25} />}
          </Link>
        </MenuItem>
        <MenuItem onClick={() => setIsOpen(false)}>
          {isLoggedI ? (
            <Link onClick={handleLogout} to="/logout">
              <FaPowerOff size={20} />
            </Link>
          ) : (
            <Link to="/login">
              <FaSignInAlt size={20} />
            </Link>
          )}
        </MenuItem>
      </Menu>
    </Nav>
  );
}

// FaSignInAlt
