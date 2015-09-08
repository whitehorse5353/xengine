/**
 * This is just an example file created at Sat Sep 05 2015 13:30:17 GMT+0530 (IST).
 *
 */

var React = require('react');

module.exports.Header = React.createClass({
  getInitialState : function(){
    return {
      title: this.props.data
    }
  },
  render: function(){
    return <nav className="navbar navbar-default">
      <div className="navbar-header"><a className="navbar-brand" href="#">{this.state.title}</a></div>
    </nav>
  }
});
