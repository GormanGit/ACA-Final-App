import React, { Component } from 'react';
import  { Form, FormControl, FormGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import { API_KEY } from '../secrets';
import { APP_ID } from '../secrets';
//add the action to the search
import { recipes, addIngredient } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      query: [],
      buttons: []
    };
  }
  addIngredient() {
    console.log("this is the add Ingredients button", this.state.buttons);
    this.state.query.push(document.getElementById("userInput"));
    // this.props.addIngredient(this.state.text)
  }

  search() {
    console.log('search button clicked', this.state.query);
    let url = `https://api.edamam.com/search?_app_id=c25b1417&_app_key=b66ddcba681839a1d252f9822481af5b&q=${this.state.query}`
    fetch(url, {
      method: 'GET'
    }).then(response => response.json())
    .then(results => {this.props.recipes(results.hits)});
  }

  render(){
    return (
      <div>
        <Form inline className="col-md-6 col-md-offset-3">
          <DropdownButton id="dropMenu" title="Diet" className="buttonColor"
          >
            <MenuItem id="listSignIn" styele={{color: "black"}}onClick={()=> this.state.buttons.push(", low-carb")}>Low-Carb</MenuItem>
            <MenuItem id="listSignIn" styele={{color: "black"}}onClick={()=> this.state.buttons.push(", Sea-Food")}>Sea-Food</MenuItem>
            <MenuItem id="listSignIn" styele={{color: "black"}}onClick={()=> this.state.buttons.push(", Keto")}>Ketogentic</MenuItem>
            <MenuItem id="listSignIn" styele={{color: "black"}}onClick={()=> this.state.buttons.push(", Vegetarian")}>Vegetarian</MenuItem>
            <MenuItem id="listSignIn" styele={{color: "black"}}onClick={()=> this.state.buttons.push(", Vegan")}>Vegan</MenuItem>
            <MenuItem id="listSignIn" styele={{color: "black"}}onClick={()=> this.state.buttons.push(", Raw")}>Raw</MenuItem>
            <MenuItem id="listSignIn" styele={{color: "black"}}onClick={()=> this.state.buttons.push(", Paleo")}>Paleo</MenuItem>
            <MenuItem id="listSignIn" styele={{color: "black"}}onClick={()=> this.state.buttons.push(", diabetic")}>Diabetic</MenuItem>
          </DropdownButton>
          {' '}
          <DropdownButton id="dropMenu" title="Cuisine" className="buttonColor"
          >
            <MenuItem id="listSignIn" styele={{color: "black"}}onClick={()=> this.state.buttons.push("+ African")}>African</MenuItem>
            <MenuItem id="listSignIn" styele={{color: "black"}}onClick={()=> this.state.buttons.push("+ American")}>American</MenuItem>
            <MenuItem id="listSignIn" styele={{color: "black"}}onClick={()=> this.state.buttons.push("+ Asian")}>Asian</MenuItem>
            <MenuItem id="listSignIn" styele={{color: "black"}}onClick={()=> this.state.buttons.push("+ French")}>French</MenuItem>
            <MenuItem id="listSignIn" styele={{color: "black"}}onClick={()=> this.state.buttons.push("+ Indian")}>Indian</MenuItem>
            <MenuItem id="listSignIn" styele={{color: "black"}}onClick={()=> this.state.buttons.push("+ Italian")}>Italian</MenuItem>
            <MenuItem id="listSignIn" styele={{color: "black"}}onClick={()=> this.state.buttons.push("+ Mexican")}>Mexican</MenuItem>
            <MenuItem id="listSignIn" styele={{color: "black"}}onClick={()=> this.state.buttons.push("+ Middle Eastern")}>Middle Eastern</MenuItem>
          </DropdownButton>
          {' '}
          <FormGroup>
            {' '}
            <FormControl
              id="listSignIn"
              style={{color: "black"}}
              type="text"
              placeholder="Add each ingredient"
              onChange={(event)=> this.setState({ query: event.target.value + this.state.buttons})}
            />
            {' '}
            <Button id="searchButton" className="glyphicon glyphicon-cutlery" bsStyle="success"
                    onClick={()=> this.search()}></Button>
            <br/>
          </FormGroup>
        </Form>

        <br/>

      </div>)

  }
}

export default connect(null, { recipes, addIngredient })(Search);
