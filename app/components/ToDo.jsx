var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('Actions');

var ToDo = React.createClass({

  render : function () {

    var {id, task, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';

    var renderDate = () => {
      var message = "Created :";
      var currentMoment = moment.unix(createdAt);

      if(completed) {
        message = "completed :";
        currentMoment = moment.unix(completedAt);
      }

      //return message + currentMoment.format('MM do YYYY @ h mm A');
      return message + currentMoment.format('MMMM do YYYY @ h mm A');
      //return createdAt;
    };

    return(
      <div className ={todoClassName} onClick={
          () => {
            //this.props.onToggle(id)
            console.log(id);
            dispatch(actions.toggleToDo(id));
          }
        }>
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
module.exports = connect()(ToDo);
