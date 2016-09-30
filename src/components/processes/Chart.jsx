//Libs
import React, {Component} from 'react';
import Measure from 'react-measure';
import ScatterPlotTime from  '../d3/ScatterPlotTime';

class Chart extends Component {
  constructor(props) {
   super(props);
   this.state = {
     width: 0,
   };
 }

  render(){
    return (
      <Measure  onMeasure={(dimensions) => {
          this.setState({width: dimensions.width})
        }}>
        <div>
          <ScatterPlotTime
            data={this.props.data}
            height={this.props.height}
            width={this.state.width}
            padding={this.props.padding} />
        </div>
      </Measure>
    );
  }
}

export default Chart;
