import React, { Component } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import RecipeItems from './RecipeItems';
// import FavoriteRecipeList from './FavoriteRecipeList'
import { Link } from 'react-router-dom';

class RecipeResults extends Component {
  render() {
    return (
      <div>
        <Link style={{marginLeft: "0px"}} to="/fav">Favorite</Link>
        {/*<FavoriteRecipeList />*/}
        {/*<hr />*/}
        <Search />

        {this.props.recipes.map(item => {
          return <RecipeItems recipes={item} key={item.recipe.label} showButton ={true}/>
        })}
  </div>
    )
  }
}

//access the data in the RECIPE
function mapStateToProps(state){
  console.log(state);
  return{
    recipes: state.recipes
  }

}
export default connect(mapStateToProps, null)(RecipeResults);