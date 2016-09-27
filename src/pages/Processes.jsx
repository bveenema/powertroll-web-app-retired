// Libs
import React, {Component} from 'react';

// Components
import TopProcess from '../components/processes/TopProcess'

// Data
import userProcesses from '../data/userProcesses';

class Processes extends Component {
  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1">
          <TopProcess data={userProcesses[0]}/>
        </div>

      </div>
    );
  }
}

export default Processes;
