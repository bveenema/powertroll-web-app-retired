import { connect } from 'react-redux'
import { addProcessField } from '../actions';

import AddProcess1 from '../components/addProcess/AddProcess1';

const mapStateToProps = (state) => {
  console.log('test')
  return {
    initialValues: state.processField.Form1
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: addProcessField,
  }
}

const AddProcess1Container = connect(mapStateToProps,mapDispatchToProps)(AddProcess1)

export default AddProcess1Container
