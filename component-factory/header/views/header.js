/**
 * This is just an example file created at Thu Sep 10 2015 21:39:52 GMT+0530 (IST).
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
      <div className="navbar-header">
        <a className="navbar-brand" href="#">{this.state.title}</a></div>
    </nav>
  }
});
