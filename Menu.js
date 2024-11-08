import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from './MenuItem';

const Menu = () => {
  // Витягуємо список елементів меню з Redux сховища
  const menuItems = useSelector((state) => state.menu.menuItems);

  return (
    <nav>
      <ul>
        {menuItems.map((item, index) => (
          <MenuItem key={index} text={item.text} url={item.url} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
