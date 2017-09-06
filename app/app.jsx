var React = require('react');
var ReactDOM = require('react-dom');
// Greeter React component -- container component
var {Provider} = require('react-redux');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var ToDoApp = require('ToDoApp');

var actions = require('Actions');
var store = require('configureStore').configStore();

//console.log(store);

//store.subscribe(() => {
//  var state = store.getState();
//  console.log("Current state of the application : " + state);
//});

store.dispatch(actions.addToDo('Clean the yard'));
//store.dispatch(actions.setSearchText('yard'));
//store.dispatch(actions.showToggleCompleted());
//store.dispatch(actions.addToDo('Clean the pool'));
store.dispatch(actions.addToDo('Clean the minde'));
//store.dispatch(actions.showToggleCompleted());
//store.dispatch(actions.toggleToDo('bf5a85d0-8f17-11e7-afe9-c30d6d921e37'));
// load foundations-sites
$(document).foundation();

require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp/>
  </Provider>,
  document.getElementById('app')
);
