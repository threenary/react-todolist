var React = require('react');
var ReactDom = require('react-dom');
var createReactClass = require('create-react-class');

//CSS requires
require('./css/todoItem.css');

//Create TodoItem component
var TodoItem = createReactClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name" ref="thisItem">{this.props.item}</span>
                    <span className="item-remove" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        );
    },

    //Custom functions
    handleDelete: function(){
        this.props.onDelete(this.props.item);
    }
});

module.exports = TodoItem;
