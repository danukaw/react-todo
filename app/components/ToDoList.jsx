var React = require('react');
var ToDo = require('ToDo');
var {connect} = require('react-redux');

var ToDoList = React.createClass({

  render : function () {

    var {todos} = this.props;

    console.log(todos);

    var renderToDoList = () => {

      if(todos.length === 0 ) {
        return(
          <p className="container__message">Nothing To Do</p>
        );
      }
      return todos.map((todo) => {
        console.log(todo.id);
         return (
            <ToDo key={todo.id} {...todo} />
          );
        });
    };

    return(
      <div>
        {renderToDoList()}
      </div>

    );
  }

});
module.exports = connect(
  (state)=>{
    return {
      todos : state.todolist
    };
})(ToDoList);
