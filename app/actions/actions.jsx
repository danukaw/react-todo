
export var setSearchText = (searchText) => {
  return {
    type : 'SET_SEARCH_TEXT',
    searchText
  };
};

export var addToDo = (text) => {
  console.log("adding todos " + text);
  return {
    type : 'ADD_TO_DO',
    text
  };
};

export var toggleToDo = (id) => {
  console.log("toggletodo " + id);
  return {
    type : 'TOGGLE_TO_DO',
    id : id
  };
};

export var showToggleCompleted = () => {
  return {
      type : 'SHOW_TOGGLE_COMPLETED'
  };
};
