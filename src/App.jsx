import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
import Login  from './components/Login';

//Remove once "official version" of React is release... (http://www.material-ui.com/#/get-started/installation)
  import injectTapEventPlugin from 'react-tap-event-plugin';
  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
  injectTapEventPlugin();


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Login />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
