//Libs
import React, {Component} from 'react';
import Measure from 'react-measure';
import ScatterPlotTime from  '../d3/ScatterPlotTime';

const styles = {
  width   : '100%',
  height  : 200,
  padding : 30,
};

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
            height={styles.height}
            width={this.state.width}
            padding={styles.padding} />
        </div>
      </Measure>
    );
  }
}

export default Chart;
