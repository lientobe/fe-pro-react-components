import React from 'react';
import ListItem from './ListItem';

import { dataMenu } from '../data/dataMenu';

const NavItem = () => {
  return (
    <nav>
      <ul className="nav-list">
        {dataMenu.map(({ url, link }) => {
          return (
            <ListItem url={url} key={link}>
              {link}
            </ListItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavItem;
