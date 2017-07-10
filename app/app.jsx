var React = require('react');
var ReactDOM = require('react-dom');

// Greeter React component -- container component

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// load foundations-sites
$(document).foundation();

require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <p>Boilerplate 3 projects</p>,
  document.getElementById('app')
);
