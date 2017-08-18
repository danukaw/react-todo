var React = require('react');
//modules which were introduced
var ToDoList = require('ToDoList');
var AddTodo = require('AddTodo');
var ToDoSearch = require('ToDoSearch');
var TodoAPI =  require('TodoAPI');
var  moment = require('moment');

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
          "completed" : false,
          "createdAt" : moment().unix(),
          "completedAt" : undefined
        }
      ]
    });

  },

  handleOnToggle : function (uuid) {

    var updatedTodos = this.state.todolist.map((todo) => {

      if (todo.id === uuid) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
      searchText : searchText.toLowerCase()
    });

  },

  render : function () {

      var {todolist, showCompleted, searchText} = this.state;
      var filteredTods = TodoAPI.filterTodos(todolist,showCompleted,searchText);
      return (
        <div>
          <h1 className="page-title">Todo App</h1>
          <div className="row">
            <div className="column small-centered small-11 medium-6 large-5" >
              <div className="container">
                <ToDoSearch onSearch={this.handleOnSearch}/>
                <ToDoList todos={filteredTods} onToggle={this.handleOnToggle}/>
                <AddTodo onSetTodo={this.handleOnSetTodo}/>
              </div>
            </div>
          </div>
        </div>
      );
  }

});

module.exports = ToDoApp;
