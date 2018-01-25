import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker';
import  {createStudent}  from '../../actions/student/student'

export class StudentForm extends PureComponent {

  static propTypes = {
    createStudent: PropTypes.func.isRequired

  }
  constructor(props) {
    super(props)

    this.state = {
      name: null,
      picture: null,
    }
  }

  // changeStartDate = (event, date) => {
  //   console.log(date);
  //   this.setState({
  //     startDate: date
  //   })
  // }

  // validatePicture() {
  //   const { picture } = this.refs
  //
  //   this.setState({
  //     picture: picture
  //   })
  //     return true
  //   }



  validateName() {
    const { name } = this.refs

    if (name.getValue().length > 1) {
      this.setState({
        nameError: null,
      })
      return true
    }
    this.setState({
      nameError: 'Please provide a student name'
    })
    return false
  }

  validateAll() {
    return this.validateName()
  }

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      // console.log(this.props.currentUser);
      const batchId = this.props.batchId

      const student = {
        name: this.refs.name.getValue(),
        picture: this.refs.picture.getValue(),
        batchId: batchId
      }
      this.props.createStudent(batchId, student)
    }
    return false
  }

  // componentWillMount() {
  //
  //   console.log("match",this.props.batchId);
  // }

  render() {
    return (

      <Paper style={{width: 500, height: 200}}>
        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <TextField ref="name" type="text" hintText="Student full name"
              onChange={this.validateName.bind(this)}
              errorText={this.state.nameError} />
          </div>
          <div className="input">
            <TextField ref="picture" type="text" hintText="Picture URL"
              // onChange={this.validatePicture.bind(this)}
              />
          </div>
        </form>
        <RaisedButton
          onClick={this.submitForm.bind(this)}
          label="Create Student" />
      </Paper>
    )
  }
}

const mapStateToProps = ({currentUser}) => ({currentUser})

const mapDispatchToProps = {createStudent}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)
