export const RECIPES = "RECIPES";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV ="REMOVE_FAV";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
//shopping list
export const ADD_REMINDER = 'ADD_REMINDER';
export const DELETE_REMINDER = "DELETE_REMINDER";
export const ADD_NUMBER = "ADD_NUMBER";
//recipe App
export function recipes(items) {
  const action = {
    type: RECIPES,
    items
  };
  return action;
}
export function addIngredient(items) {
  const action = {
    type: ADD_INGREDIENT,
    items
  };
  console.log('action in addIngredient', action)
  return action;
}
//adding the favorite to the store
export function addToFavorite(recipes){
  return{
    type: ADD_FAV,
    recipes
  }
}

export function removeFromFavorite(recipes){
  return {
    type: REMOVE_FAV,
    recipes
  }
}

//shopping List
export const addReminder = (text) => {
  //and action is the object
  const action = {
    type: ADD_REMINDER,
    text
  }
  console.log('action in addReminder', action);
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('deleting in actions', action);
  return action;
}

export const addNumber = (num)=>{
  const action = {
    type: ADD_NUMBER,
    num
  }
  console.log('adding a number in action', action);
  return action
}