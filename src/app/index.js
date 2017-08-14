var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
import PropTypes from 'prop-types';

import { Router, Route, browserHistory, Link } from 'react-router';

//Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var SendItems = require('./sendItems');
var About = require('./about');

//CSS requires
require('./css/index.css');

//SETUP ROUTING
var App = createReactClass({
    render: function(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={TodoComponent}></Route>
                <Route path={"/about"} component={About}></Route>
            </Router>
        );
    }
});

//Create a component
var TodoComponent = createReactClass({
    getInitialState: function(){
        return {
            todos: ['Go to shopping', 'Buy cheese', 'Learn ReactJS']
        }
    }, //getInitialState
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(<TodoItem key={index} item={item} onDelete={this.onDelete} />);
        }.bind(this));
        return(
            <div id="todo-list">
                <Link to={"/about"}>About</Link>
                <h2>Things to do</h2>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd} />
                <SendItems onSend={this.onSend} />
            </div>
        );
    }, //render

    //Custom functions
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
        });
    },
    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    },
    onSend: function(item){
      console.log(this.state.todos);
      console.log(item);
    }

});

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
