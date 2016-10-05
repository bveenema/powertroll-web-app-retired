//libs
import React, { Component } from 'react';

//Component
class InputWrapper extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: this.props.initialValue,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    React.Children.forEach(this.props.children,)
  }

  handleChange(event, index, value) {
    console.log('index', index);
    if(this.props.handleChange){
      this.props.handleChange(event,index,value,this.props.id);
    }
    this.setState({value: value});
  }

  render(){
    return(
      <div>
        {this.props.children}
      </div>
    );
  };
}

InputWrapper.propTypes = {
  onChange: React.PropTypes.func,
  id: React.PropTypes.string,
}

export default InputWrapper;
