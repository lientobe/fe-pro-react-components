import React from 'react';
import ListItem from './ListItem';

import { dataMenu } from '../data/dataLists';

const NavItem = () => {
  return (
    <nav>
      <ul className="nav-list">
        {dataMenu.map(({ url, link, id }) => {
          return (
            <ListItem url={url} key={id}>
              {link}
            </ListItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavItem;
