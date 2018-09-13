import {
  ADD_RECIPE,
  REMOVE_FROM_CALENDAR,
} from '../actions'

const initialCalendarState = {
  sunday: {
    breakfeast: null,
    lunch: null,
    dinner: null,
  },
  monday: {
    breakfeast: null,
    lunch: null,
    dinner: null,
  },
  tuesday: {
    breakfeast: null,
    lunch: null,
    dinner: null,
  },
  wednesday: {
    breakfeast: null,
    lunch: null,
    dinner: null,
  },
  thursday: {
    breakfeast: null,
    lunch: null,
    dinner: null,
  },
  friday: {
    breakfeast: null,
    lunch: null,
    dinner: null,
  },
  saturday: {
    breakfeast: null,
    lunch: null,
    dinner: null,
  },
}

function calendar (state = initialCalendarState, action) {
  const { day, recipe, meal } = action

  switch (action.type) {
    case ADD_RECIPE :
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.label,
        }
      }
    case REMOVE_FROM_CALENDAR :
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null,
        }
      }
    default :
      return state
  }
}

export default calendar
