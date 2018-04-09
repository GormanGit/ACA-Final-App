import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';
import { addReminder, deleteReminder, addNumber } from "../actions";
import "../App.css";
import { FormGroup, Checkbox } from 'react-bootstrap'


class AppList extends Component {
  //state needed so that we know what the user types in the text field
  constructor(props) {
    super(props);
    this.state = {
      text: [],
      className: "glyphicon glyphicon-unchecked"

    }
  }

  addReminder() {
    console.log('this.state', this.state);
    this.props.addReminder(this.state.text)


  }
  addNumber(){
    console.log('this.state', this.state);
    this.props.addNumber(this.state.num)
  }

  deleteReminder(id) {
    // console.log('deleting in application', id);
    // console.log('this.props', this.props);
    this.props.deleteReminder(id);
  }
  checkbox(){
    this.setState({thisDiv: !this.state.thisDiv})
  }

  renderReminders() {
    let reminders = this.props.reminders.favorites[0];
    console.log('reminders', reminders.id);

    let reminderDivs = reminders.recipe.ingredients.map(reminder => {
      return (
        <li key={reminder.id} className="list-group-item">

          <div>{ reminder.text
            // || reminder.num || this.state
          }</div>
          {/*<div>{}</div>*/}

          {/*<div className="list item delete-button" onClick={()=> this.deleteReminder(reminder.id)} >*/}
          {/*&#2715;*/}
          {/*&#88;*/}

          <form>
            <FormGroup>
              <Checkbox inline>Found</Checkbox>
            </FormGroup>
          </form>

          {/*</div>*/}
        </li>
      )
    });
    console.log(reminderDivs);
    return (
      <ul className="list-group col-sm-4">
        {reminderDivs}

      </ul>
    )
  }

  render() {
    // console.log('this.props', this.props);
    return (
      <div className="App">
        <div className="title">
          Ingredients List!
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Oh yeah, I need..."
              onChange={event => this.setState({text: event.target.value })}
            />
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >Add Reminder</button>
        </div>
        {this.renderReminders()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addReminder, deleteReminder, addNumber }, dispatch);
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {
    reminders: state
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppList);
// export default App;