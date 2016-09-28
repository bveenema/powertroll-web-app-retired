// Libs
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Remove once "official version" of React is release... (http://www.material-ui.com/#/get-started/installation)
  import injectTapEventPlugin from 'react-tap-event-plugin';
  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
  injectTapEventPlugin();

// src Components
import Header from './components/header/Header';

// Styles
const styles= {
  pageWrapper: {
    margin: '10px',
  }
}


class App extends Component {
  render() {
    let userData = this.props.route.userData;
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header loggedIn={userData.loggedIn}/>
            <div className="pure-g" style={styles.pageWrapper}>
              {this.props.children}
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
