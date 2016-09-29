//Libs
import React, {Component} from 'react';
import Measure from 'react-measure';
import ScatterPlot from  './ScatterPlot';

const styles = {
  width   : '100%',
  height  : 200,
  padding : 30,
};

// The number of data points for the chart.
const numDataPoints = 50;

// A function that returns a random number from 0 to 1000
const randomNum     = () => Math.floor(Math.random() * 1000);

// A function that creates an array of 50 elements of (x, y) coordinates.
const randomDataSet = () => {
  return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
}

class Chart extends Component {
  constructor(props) {
   super(props);
   this.state = {
     data: randomDataSet(),
     width: 0,
   };
 }

 randomizeData() {
   this.setState({ data: randomDataSet() });
 }

  render(){
    return (
      <Measure  onMeasure={(dimensions) => {
          this.setState({width: dimensions.width})
        }}>
        <div>
          <ScatterPlot
            data={this.state.data}
            height={styles.height}
            width={this.state.width}
            padding={styles.padding} />
        </div>
      </Measure>
    );
  }
}

export default Chart;
