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



        <h4 id="listSignIn" >My Latest Recipes</h4>
        {this.props.favorites.map(recipes =>{
          return <RecipeItems style={{position: "fixed"}} recipes={recipes} key={recipes.recipe.image} showButton={false}/>
        })}
        <li style={{ display: "flex", justifyContent: "center", marginRight: "32%", fontSize: "18px"}} id="list"><Link style={{color: "#9A3014"}} to="/">Home</Link></li>

        <li style={{ display: "flex", justifyContent: "center", marginRight: "32%", fontSize: "18px"}} id="list"><Link style={{color: "#9A3014"}} to ="/AppList">Shopping List</Link></li>

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