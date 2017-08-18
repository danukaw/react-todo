var React = require('react');
var moment = require('moment');

var ToDo = React.createClass({

  render : function () {

    var {id, task, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';

    var renderDate = () => {
      var message = "Created :";
      var currentMoment = moment.unix(createdAt);

      if(completed) {
        message = "completed :";
        currentMoment = moment.unix(completedAt);
      }

      return message + currentMoment.format('MMMM do YYYY @ h mm A');
      //return createdAt;
    };

    return(
      <div className ={todoClassName} onClick={() => { this.props.onToggle(id)}}>
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{task}</p>
          <p className="todo-subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }

});
module.exports = ToDo;
