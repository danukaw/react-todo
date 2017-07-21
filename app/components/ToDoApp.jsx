var React = require('react');
//modules which were introduced
var ToDoList = require('ToDoList');
var AddTodo = require('AddTodo');
var ToDoSearch = require('ToDoSearch');
var TodoAPI =  require('TodoAPI');

var uuidv1 = require('uuid/v1');

var ToDoApp = React.createClass({

  getInitialState : function () {
    return ({
      showCompleted : false,
      searchText : "",
      todolist : TodoAPI.getTodos()
    });
  },

  componentDidUpdate : function () {
      TodoAPI.setTodos(this.state.todolist);
  },

  handleOnSetTodo : function (text) {
    this.setState({
      todolist : [
        ...this.state.todolist,
        {
          "id" : uuidv1(),
          "task" : text,
          "completed" : false
        }
      ]
    });

  },

  handleOnToggle : function (uuid) {
    console.log("uuid of the todo ", uuid);
    var updatedTodos = this.state.todolist.map((todo) => {

      if (todo.id === uuid) {
        todo.completed = !todo.completed;
      }
      return todo
    })
    this.setState({
      todolist : updatedTodos
    });
  },

  handleOnSearch : function (searchText, completedTodos) {

    console.log("todoSearch ->" , searchText);
    console.log("completedTodos ->" , completedTodos);

    this.setState({
      showCompleted : completedTodos,
      searchText : searchText
    });

  },

  render : function () {

      var {todolist} = this.state;

      return (
        <div>
          <ToDoSearch onSearch={this.handleOnSearch}/>
          <ToDoList todos={todolist} onToggle={this.handleOnToggle}/>
          <AddTodo onSetTodo={this.handleOnSetTodo}/>
        </div>
      );
  }

});

module.exports = ToDoApp;
