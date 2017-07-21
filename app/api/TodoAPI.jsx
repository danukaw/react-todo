var uuidv1 = require('uuid/v1');
var $ = require('jquery');

var TodoAPI = {

  getTodos : function () {

    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try{
      todos = JSON.parse(stringTodos);
    }catch (e) {

    }

    return $.isArray(todos) ? todos : [];

  },
  setTodos : function (todos) {

    if($.isArray(todos)) {
      localStorage.setItem('todos',JSON.stringify(todos));
      return todos
    }

  }

};

module.exports = TodoAPI;
