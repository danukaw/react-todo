var  moment = require('moment');
var uuidv1 = require('uuid/v1');

export var sarchTextReducer = (state="", action) => {

  switch(action.type) {

    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default :
      return state;

  };
};

/**
export var showCompltedReducer = (state={showCompleted : false}, action) => {

  switch(action.type) {

    case 'SHOW_TOGGLE_COMPLETED':
      return {
        showCompleted : true
      };
    default :
      return state;

  };
};
**/

export var showCompltedReducer = (state=false, action) => {

  switch(action.type) {

    case 'SHOW_TOGGLE_COMPLETED':
      return !state;
    default :
      return state;

  };
};

export var addTodoReducer = (state=[], action) => {

  switch (action.type) {
    case 'ADD_TO_DO':

      return [
        ...state,
        {
            "id" : uuidv1(),
            "task" : action.text,
            "completed" : false,
            "createdAt" : moment().unix(),
            "completedAt" : undefined
         }
      ];

    case 'TOGGLE_TO_DO':

        return state.map((todo) => {

          var nextCompleted = todo.completed;
          if (todo.id === action.id) {
             nextCompleted = !todo.completed;
          }

          return {
            ...todo,
            "completed" : nextCompleted,
            "completedAt" : nextCompleted ? moment().unix() : undefined
          };

        });
    default:
      return state;
  }
};
