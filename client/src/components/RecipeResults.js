import React, { Component } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import RecipeItems from './RecipeItems';
// import FavoriteRecipeList from './FavoriteRecipeList'
import { Link } from 'react-router-dom';

class RecipeResults extends Component {
  render() {
    // const faveLink = <Link id="list" style={{display: "flex", fontSize: "20px"}} to="/fav">Favorite</Link>;
    return (
      <div >
        {/*<Link id="list" style={{left: "20%"}} to="/fav">Favorite</Link>*/}
        <div>
          {/*{faveLink}*/}

        {/*<FavoriteRecipeList />*/}
        {/*<hr />*/}
        </div>
        <Search />
        <br/>

        <li style={{ display: "flex", justifyContent: "center", marginRight: "3%", fontSize: "18px"}} id="list"><Link style={{color: "#9A3014"}} to="/fav">Start Cooking</Link></li>
        {this.props.recipes.map(item => {
          return <RecipeItems recipes={item} key={item.recipe.label} showButton={true} />

        })}


        {/*<Link id="list" style={{ left: "20%", fontSize: "18px"}} to="/fav">Start Cooking</Link>*/}

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