var React = require('react');
var createReactClass = require('create-react-class');

require('./css/sendItems.css');

var SendItems = createReactClass({
    render: function(){
        return(
            <form id="send-todos" onSubmit={this.handleSubmit}>
                <input type="email" required ref="destination" placeholder="youremail@address.com"/>
                <input type="submit" value="Send" />
            </form>
        );
    },

    //Custom functions
    handleSubmit: function(e){
        e.preventDefault();
        this.props.onSend(this.refs.destination.value);
    }
});

module.exports = SendItems;
