//is this working?
import React, { Component } from 'react';
import RecipeResults from './RecipeResults'
import "../App.css";
import FavoriteRecipeList from "../components/FavoriteRecipeList";
import AppList from "./AppList";


import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="container" >
        <div className="row text-center">
          <div className="jumbotron">
            <h1>Recipe Magic</h1>
            <p>There's Nothing to Eat!</p>
          </div>
          < br/>
        </div>
        <div className="row">
          <Router>
            <Switch>
              <Route path="/" exact component={ RecipeResults } />
              <Route path="/fav" exact component={ FavoriteRecipeList } />
              <Route path="/AppList" exact component={ AppList } />
            </Switch>
          </Router>
        </div>
        <div className="row" align="center" >
          {/*<DietNav />*/}
        </div>
        {/*<div className="row">*/}
        {/*/!*<RecipeResults />*!/*/}
        {/*</div>*/}
      </div>

    );
  }
}

export default App;