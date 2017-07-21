var React = require('react');
var ToDo = React.createClass({

  render : function () {

    var {id, task, completed} = this.props;

    return(
      <div onClick={() => { this.props.onToggle(id)}}>
        <input type="checkbox" checked={completed} />
        {task}
      </div>
    );
  }

});
module.exports = ToDo;
