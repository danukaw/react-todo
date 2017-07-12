var React = require('react');
var ReactDOM = require('react-dom');

// Greeter React component -- container component

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var ToDoApp = require('ToDoApp');

// load foundations-sites
$(document).foundation();

require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <ToDoApp/>,
  document.getElementById('app')
);
