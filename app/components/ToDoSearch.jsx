var React = require('react');

var ToDoSearch = React.createClass({

  handleSearch : function () {

    var toDoSearch = this.refs.todosearch.value;
    var completedTodos = this.refs.showCompleted.checked;

     this.props.onSearch(toDoSearch, completedTodos);

  },

  render : function () {

    return(
      <div className="container__header">
        <div>
          <input type="search" ref="todosearch" placeholder="Search todos..." onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/> Show completed todos
          </label>
        </div>
      </div>
    );
  }

});

module.exports = ToDoSearch;
