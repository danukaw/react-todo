var React = require('react');
var ToDo = require('ToDo');

var ToDoList = React.createClass({

  render : function () {

    var {todos} = this.props;

    var renderToDoList = () => {
      return todos.map((todo) => {
         return (
            <ToDo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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
module.exports = ToDoList
