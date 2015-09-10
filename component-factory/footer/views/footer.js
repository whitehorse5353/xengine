/**
 * This is just an example file created at Thu Sep 10 2015 21:50:37 GMT+0530 (IST).
 *
 */

var React = require('react');
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
