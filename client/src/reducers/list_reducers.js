import { ADD_REMINDER, DELETE_REMINDER, ADD_NUMBER } from '../actions';


const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random(),
    num: action.num
  }
}

const removeById = (state=[], id) => {
  // check to see if the array is not equal to the id. giving an array of objects not equal to the id we specified
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('new reduced reminders', reminders);
  return reminders;
}


const reminders = (state = [], action ) => {
  let reminders = [...state];
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)]
      console.log('reminders and state', reminders)
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      return reminders;
    case ADD_NUMBER:
      reminders = [...state, reminder(action)]
      return reminders;
    default:
      return state;
  }
}

export default reminders;