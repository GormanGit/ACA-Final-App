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



class App1 extends Component {
  render() {
    return (
      <div className="container" >
        <div className="row text-center" >
          <div >
            <h1 id="signUpSignIn" style={{fontSize: "33pt"}}>There's Nothing to Eat!</h1>
            <h2 id="signUpSignIn"></h2>
          </div>
          < br/>
        </div>
        <div className="row">
          <Router>
            <Switch>
              <Route path="/" exact component={ RecipeResults } />
              <Route path="/fav" exact component={ FavoriteRecipeList } />
              <Route style={{height: "auto"}} path="/AppList" exact component={ AppList } />
            </Switch>
          </Router>
        </div>
        <div className="row" align="center" >

        </div>
        {/*<div className="row">*/}
        {/*/!*<RecipeResults />*!/*/}
        {/*</div>*/}
      </div>

    );
  }
}

export default App1;