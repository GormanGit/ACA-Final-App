import { RECIPES } from '../actions';

export default function recipes(state = [], action){
  switch (action.type) {
    case RECIPES:
      console.log("Recipes are ", action.items);
      return action.items;
    default:
      return state;
  }
}