import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Logo = () => {
  // Витягуємо шлях до логотипу з Redux сховища
  const logoPath = useSelector((state) => state.logo.logoPath);

  return (
    <div className="logo">
      <Link to="/">
        <img src={logoPath} alt="Logo" style={{ height: '40px' }} />
      </Link>
    </div>
  );
};

export default Logo;
