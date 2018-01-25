import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker';
import  {createEvaluation}  from '../../actions/evaluation/evaluation'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const EVAL_COLORS = ["Green", "Yellow", "Red"]

export class EvaluationForm extends PureComponent {


  static propTypes = {
    createEvaluation: PropTypes.func.isRequired

  }
  constructor(props) {
    super(props)

    this.state = {
      value: 1,
      evalDate: null,
      remarkError: null
    }
  }
  validateDate(e, date) {
    const evalDate = date || this.state.evalDate
    // console.log(endDate)
    if(!!evalDate) {
      this.setState({
        dateError: null,
        evalDate: date
      })
      return true
    }
    this.setState({
      dateError: "You must set a date"
      // dateError: "End date must come after Start date"
    })
    return false
  }


  validateRemark() {
    const { remark } = this.refs
    const value = this.state.value

    if (remark.getValue().length > 1 || value === 1) {
      this.setState({
        remarkError: null,
      })
      return true
    }
    this.setState({
      remarkError: 'Please provide a comment'
    })
    return false
  }

  validateAll() {
    return this.validateRemark() &&
    this.validateDate()
  }

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      // console.log(this.props.currentUser);
      const studentId = this.props.studentId

      // const value = this.state.value
      // console.log(value);
      const evaluation = {
        date: this.state.evalDate,
        code: EVAL_COLORS[this.state.value-1],
        remark: this.refs.remark.getValue(),
        studentId: studentId
      }
      this.props.createEvaluation(studentId, evaluation)
    }
    return false
  }



  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (

      <Paper style={{width: 500, height: 300}}>
        <form onSubmit={this.submitForm.bind(this)}>
        <div className="input">
          <SelectField
            floatingLabelText="Evaluation code"
            ref="code"
            value={this.state.value}
            onChange={this.handleChange} >
            <MenuItem value={1} primaryText="Green" />
            <MenuItem value={2} primaryText="Yellow" />
            <MenuItem value={3} primaryText="Red" />
          </SelectField>
        </div>
        <div className="input">
          <DatePicker ref="date" hintText="Evaluation date" mode="landscape"
            onChange={this.validateDate.bind(this)}
            errorText={this.state.dateError}
            value={this.state.evalDate}
             />
        </div>
          <div className="input">
            <TextField ref="remark" type="text" hintText="A comment"
              multiLine={true}
              rows={2}
              rowsMax={4}
              onChange={this.validateRemark.bind(this)}
              errorText={this.state.remarkError} />
          </div>

        </form>
        <RaisedButton
          onClick={this.submitForm.bind(this)}
          label="Create Evaluation" />
      </Paper>
    )
  }
}

const mapStateToProps = ({currentUser}) => ({currentUser})

const mapDispatchToProps = {createEvaluation}

export default connect(mapStateToProps, mapDispatchToProps)(EvaluationForm)
