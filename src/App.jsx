import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/header/Header';

//Remove once "official version" of React is release... (http://www.material-ui.com/#/get-started/installation)
  import injectTapEventPlugin from 'react-tap-event-plugin';
  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
  injectTapEventPlugin();


class App extends Component {
  render() {
    let userData = this.props.route.userData;
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header loggedIn={userData.loggedIn}/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
