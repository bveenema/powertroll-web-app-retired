import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';

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
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-1-2"><p>Thirds</p></div>
            <div className="pure-u-1 pure-u-md-1-4"><p>Thirds</p></div>
            <div className="pure-u-1 pure-u-md-1-4"><p>Thirds</p></div>
        </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
