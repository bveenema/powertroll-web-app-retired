// Libs
import React from 'react';

// Components
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// data
import LinkList from '../data/links'

const MenuDrawer = (props) => {
  let links = LinkList.knownUser.map((link) => {
    return (
      <MenuItem onClick={() => props.handleClick(link.url)} key={link.id}>{link.text}</MenuItem>
    );
  });
  return (
    <Drawer {...props}>
      {links}
    </Drawer>
  )
};

export default MenuDrawer;
