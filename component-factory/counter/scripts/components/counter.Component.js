/**
 * This is just an example file created at Mon Sep 14 2015 23:09:34 GMT+0530 (IST).
 *
 */

var React = require("react");
var counterAction = require("../actions/counter.Action");
var counterStore = require("../stores/counter.Stores");

module.exports.Counter = React.createClass({
  getInitialState: function () {
    return {
      count: counterStore.getCounterValue()
    }
  },
  updateLocalState: function () {
    this.setState({count: counterStore.getCounterValue()});
  },
  componentDidMount: function () {
    counterStore.addListener('change', this.updateLocalState);
  },
  handleClick: function () {
    counterAction.addCount(React.findDOMNode(this.refs.counter).value);
  },
  render: function () {
    return <div>
      <input type="button" value="+" onClick={this.handleClick}/>
      <input type="text" value={this.state.count} ref="counter"/>
    </div>
  }
});
