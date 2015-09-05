/**
 * This is just <%= whatIsThis %>.
 *
 */

var React = require('react');

module.exports.<%= filename.substring(0, 1).toUpperCase() + filename.substring(1, filename.length) %> = React.createClass({
  getInitialState : function(){
    return {

    }
  },
  render: function(){
    return <div><%= filename %>..!!</div>
  }
});
