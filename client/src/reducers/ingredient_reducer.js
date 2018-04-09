import { ADD_INGREDIENT} from "../actions";

function addIngredient(state = [], action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      console.log("new Ingredients", action.items);
      return action.items;
    default:
      return state;
  }

}
export default addIngredient;