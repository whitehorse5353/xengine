/**
 * This is just an example file created at Mon Sep 14 2015 23:06:20 GMT+0530 (IST).
 *
 */

var React = require("react");
var footerAction = require("../actions/footer.Action");
var footerStore = require("../stores/footer.Stores");

var style = {
  footer: {
    width: '100%',
    height: '50px',
    paddingTop: '15px',
    paddingLeft: '15px',
    backgroundColor: '#f5f5f5'
  }
};

module.exports.Footer = React.createClass({
  getInitialState : function(){
    return {
      title: this.props.data
    }
  },
  render: function(){
    return <footer className="footer" style={style.footer}>
      <p className="text-muted">{this.state.title}</p></footer>
  }
});

