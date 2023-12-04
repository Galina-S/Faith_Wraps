import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import navBar from '../img/nav.jpg';
import '../App.css';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
      <div className="flex items-center mx-auto">
        <img
          src={navBar}
          alt="logo"
          border="0"
          onClick={() => navigate('/')}
          style={{ maxWidth: '100%', height: 'auto' }}
          className="max-w-full h-auto"
        />
             </div>
    </header>
  );
}
