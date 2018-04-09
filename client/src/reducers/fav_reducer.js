import { ADD_FAV, REMOVE_FAV } from "../actions";


function addToFavorite(state = [], action) {
  switch (action.type) {
    case ADD_FAV:
      console.log("Recipe added to favorite", action.recipes);
      //added movie to the state array
      let favoriteRecipe = [...state, action.recipes]
      return favoriteRecipe;
    case REMOVE_FAV:
      //this needs to get into the array specifically targeting differences ie. the urls, something that is unique to each recipe.
      favoriteRecipe = state.filter(item => item.recipe.url !== action.recipes.recipe.url);
      return favoriteRecipe;
    default:
      return state;
  }
}
export default addToFavorite;