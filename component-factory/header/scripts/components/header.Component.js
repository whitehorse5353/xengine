/**
 * This is just an example file created at Mon Sep 14 2015 23:05:46 GMT+0530 (IST).
 *
 */

var React = require("react");
var headerAction = require("../actions/header.Action");
var headerStore = require("../stores/header.Stores");

module.exports.Header = React.createClass({
  getInitialState : function(){
    return {
      title: this.props.data
    }
  },
  render: function(){
    return <nav className="navbar navbar-default">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">{this.state.title}</a></div>
    </nav>
  }
});

