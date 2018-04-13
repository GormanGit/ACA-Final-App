import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';
import { addReminder, deleteReminder, addNumber } from "../actions";
import "../App.css";
import { FormGroup, Checkbox, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'



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

          <div >{ reminder.text
            // || reminder.num || this.state
          }</div>
          {/*<div>{}</div>*/}

          {/*<div className="list item delete-button" onClick={()=> this.deleteReminder(reminder.id)} >*/}
          {/*&#2715;*/}
          {/*&#88;*/}

          <form>
            <FormGroup id="list">
              <Checkbox inline>Found</Checkbox>
            </FormGroup>
          </form>

          {/*</div>*/}
        </li>

      )

    });
    console.log(reminderDivs);
    return (
      <ul id="listSignIn" style={{left: "38%", width: "300",text: "1em", color: "black", fontSize: "18"}} className="list-group col-sm-4">
        {reminderDivs}

      </ul>

    )
  }
  render() {
    // console.log('this.props', this.props);
    return (
      <div className="App">
        <div className="title" id="listSignIn" style={{fontSize: "25px"}}>
           Ingredients List!
          <div style={{ fontSize: "18px", left: "38%"}} id="list"><Link style={{color: "#9A3014"}} to="/">Home</Link></div>
          <div style={{ fontSize: "18px", left: "38%"}} id="list"><a style={{color: "#9A3014"}} href="https://www.google.com/maps/search/grocery+store+near+me" target="_blank">Store</a></div>
          <div style={{ fontSize: "18px", left: "38%"}} id="list"><a style={{color: "#9A3014"}} href="https://www.google.com/maps/search/food+trailer+near+me" target="_blank">Just give me a Taco!</a></div>

        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Oh yeah, I need..."
              onChange={event => this.setState({text: event.target.value })}
            />
          </div>
          {' '}

          {/*<button*/}
            {/*type="button"*/}
            {/*className="btn btn-success"*/}
            {/*onClick={() => this.addReminder()}*/}
          {/*>Add Reminder</button>*/}
          <Button id="searchButton" className="glyphicon glyphicon-cutlery" bsStyle="success"
          ></Button>
        </div>

        <br/>
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