import React, { Component } from 'react';
import  { Form, FormControl, FormGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import { API_KEY } from '../secrets';
import { APP_ID } from '../secrets';
//add the action to the search
import { recipes, addIngredient } from '../actions';
import { connect } from 'react-redux';

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
    let url = `https://api.edamam.com/search?_app_id=${APP_ID}&_app_key=${API_KEY}&q=${this.state.query}`
    fetch(url, {
      method: 'GET'
    }).then(response => response.json())
    .then(results => {this.props.recipes(results.hits)});
  }

  render(){
    return (
      <div>
        <Form inline className="col-md-6 col-md-offset-3">
          <DropdownButton id="dropMenu" title="Diet" className="btn btn-primary"
          >
            <MenuItem onClick={()=> this.state.buttons.push(", low-carb")}>Low-Carb</MenuItem>
            <MenuItem onClick={()=> this.state.buttons.push(", Sea-Food")}>Sea-Food</MenuItem>
            <MenuItem onClick={()=> this.state.buttons.push(", Keto")}>Ketogentic</MenuItem>
            <MenuItem onClick={()=> this.state.buttons.push(", Vegetarian")}>Vegetarian</MenuItem>
            <MenuItem onClick={()=> this.state.buttons.push(", Vegan")}>Vegan</MenuItem>
            <MenuItem onClick={()=> this.state.buttons.push(", Raw")}>Raw</MenuItem>
            <MenuItem onClick={()=> this.state.buttons.push(", Paleo")}>Paleo</MenuItem>
          </DropdownButton>
          {' '}
          <DropdownButton id="dropMenu" title="Cuisine" className="btn btn-primary"
          >
            <MenuItem onClick={()=> this.state.buttons.push("+ American")}>American</MenuItem>
            <MenuItem onClick={()=> this.state.buttons.push("+ Asian")}>Asian</MenuItem>
            <MenuItem onClick={()=> this.state.buttons.push("+ French")}>French</MenuItem>
            <MenuItem onClick={()=> this.state.buttons.push("+ Indian")}>Indian</MenuItem>
            <MenuItem onClick={()=> this.state.buttons.push("+ Italian")}>Italian</MenuItem>
            <MenuItem onClick={()=> this.state.buttons.push("+ Mexican")}>Mexican</MenuItem>
            <MenuItem onClick={()=> this.state.buttons.push("+ Middle Eastern")}>Middle Eastern</MenuItem>
          </DropdownButton>
          {' '}
          <FormGroup>
            {' '}
            <FormControl
              type="text"
              placeholder="Add each ingredient"
              onChange={(event)=> this.setState({ query: event.target.value + this.state.buttons})}
            />
            {' '}
            <Button className="glyphicon glyphicon-cutlery" bsStyle="success"
                    onClick={()=> this.search()}></Button>
            <br/>
          </FormGroup>
        </Form>
        <br/>
      </div>)
  }
}

export default connect(null, { recipes, addIngredient })(Search);
