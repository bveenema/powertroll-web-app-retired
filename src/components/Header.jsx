import React, { Component } from 'react';
import './Header.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import TrollIcon from './TrollIcon'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  
  handleClose = () => {
    this.setState({open: false});
    console.log("handleClose");
  }

  render() {
    return (
      <div className="Header">
        <AppBar 
          title="PowerTroll"
          style={this.titleStyle}
          iconElementRight={<IconButton><TrollIcon /></IconButton>}
          iconElementLeft={<IconButton onTouchTap={this.handleToggle} ><NavigationMenu /></IconButton>}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Header;
