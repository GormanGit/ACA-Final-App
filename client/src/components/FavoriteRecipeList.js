import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItems from './RecipeItems'
import { Link } from 'react-router-dom';
import "../App.css";


class FavoriteRecipeList extends Component{
  render() {
    console.log(this.props.favorites)
    return (
      //map over the favorites and render the RecipeItems that are returned in a seperate div
      <div>

        <li id="list"><Link to="/">Home</Link></li>
        <li id="list"><Link to ="/AppList">Shopping List</Link></li>

        <h4>My Latest Recipes</h4>
        {this.props.favorites.map(recipes =>{
          return <RecipeItems recipes={recipes} key={recipes.recipe.image} showButton={false}/>
        })}

      </div>


    )
  }
}
//wire to the store
function mapStateToProps(state){
  return{
    //once we have favorites here we can access it in the render above
    favorites: state.favorites

  }
}




export default connect(mapStateToProps, null)(FavoriteRecipeList);