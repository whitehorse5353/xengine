/**
 * This is just <%= whatIsThis %>.
 *
 */

var React = require("react");
var <%= filename %>Action = require("../actions/<%= filename %>.Action");
var <%= filename %>Store = require("../stores/<%= filename %>.Stores");

module.exports.<%= filename.substring(0, 1).toUpperCase() + filename.substring(1, filename.length) %> = React.createClass({
  getInitialState : function(){
    return {

    }
  },
  render: function(){
    return <div><%= filename %>..!!</div>
  }
});
