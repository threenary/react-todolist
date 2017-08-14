var React = require('react');
var createReactClass = require('create-react-class');
var Link = require('react-router').Link;

var About = createReactClass({
    render: function(){
        return(
            <div>
                <Link to={"/"}>Home</Link>
                <h2>Gonzalo Gómez Sullain</h2>
                <p>Whant to know a little more about me: <a href="https://www.linkedin.com/in/ggomezsullain/" target="_blank">Visit my Profile</a></p>
            </div>
        );
    }
});

module.exports = About;
