import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker';
import { createBatch } from '../../actions/batch/batch'

export class BatchForm extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      name: null,
      startDate: null,
      endDate: null
    }
  }

  // changeStartDate = (event, date) => {
  //   console.log(date);
  //   this.setState({
  //     startDate: date
  //   })
  // }

  validateEndDate(e, date) {
    const endDate = date || this.state.endDate
    console.log(endDate)
    // console.log(this.state);
    // const {startDate} = this.state
    // console.log("start",startDate);
    // console.log(endDate);
    // console.log(this.refs.startDate.getValue());
    // if (!!endDate && !!startDate && (endDate > startDate ) ) {
    if(!!endDate) {
      this.setState({
        dateError: null,
        endDate: endDate
      })
      return true
    }
    this.setState({
      dateError: "You must set a date"
      // dateError: "End date must come after Start date"
    })
    return false
  }

  validateStartDate(e, date) {
    const startDate = date || this.state.startDate
    console.log(startDate)
    // console.log(this.state);
    // const {endDate} = this.state
    // console.log("end",endDate);
    // console.log(endDate);
    // console.log(this.refs.startDate.getValue());
    // if (!!endDate && !!startDate && (endDate > startDate ) ) {
    if(!!startDate) {
      this.setState({
        dateError: null,
        startDate: startDate
      })
      return true
    }
    this.setState({
      // dateError: "End date must come after Start date"
      dateError: "You must set a date"
    })
    return false
  }

  validateName() {
    const { name } = this.refs

    if (name.getValue().length > 1) {
      this.setState({
        nameError: null
      })
      return true
    }
    this.setState({
      nameError: 'Please provide a batch name'
    })
    return false
  }

  validateAll() {
    return this.validateName() &&
    this.validateStartDate() &&
    this.validateEndDate()
  }

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      console.log(this.props.currentUser);
      const batch = {
        name: this.refs.name.getValue(),
        startDate: this.state.startDate,
        endDate: this.state.endDate
      }
      console.log(batch);
      this.props.createBatch(batch)
    }
    return false
  }

  render() {
    return (

      <Paper style={{width: 500, height: 500}}>
        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <TextField ref="name" type="text" hintText="Batch name"
              onChange={this.validateName.bind(this)}
              errorText={this.state.nameError} />
          </div>
          <div className="input">
            <DatePicker ref="startDate" hintText="Start date" mode="landscape"
              onChange={this.validateStartDate.bind(this)}
              errorText={this.state.dateError}
              value={this.state.startDate}
               />
          </div>
          <div className="input">
            <DatePicker ref="endDate" hintText="End date" mode="landscape"
              onChange={this.validateEndDate.bind(this)}
              errorText={this.state.dateError}
              value={this.state.endDate}
               />
          </div>
        </form>
        <RaisedButton
          onClick={this.submitForm.bind(this)}
          label="Create Batch" />
      </Paper>
    )
  }
}

const mapStateToProps = ({currentUser}) => ({currentUser})

const mapDispatchToProps = {createBatch}

export default connect(mapStateToProps, mapDispatchToProps)(BatchForm)
