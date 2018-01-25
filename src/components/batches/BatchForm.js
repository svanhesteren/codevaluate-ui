import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker';

export class BatchForm extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      name: null,
      start_date: Date.now
    }
  }

  changeStartDate = event => date => {
    this.setState( {
      start_date: date
    })
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
    return this.validateName()
  }

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const batch = {
        name: this.refs.name.getValue(),

      }
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
            <DatePicker hintText="Start date" mode="landscape"
              value={this.state.start_date}
              onChange={this.changeStartDate}/>
          </div>
        </form>
        <RaisedButton
          onClick={this.submitForm.bind(this)}
          label="Create Batch" />
      </Paper>
    )
  }
}
