/**
 * This is just an example file created at Sat Sep 05 2015 14:19:17 GMT+0530 (IST).
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
module.exports.Seriously = React.createClass({
  getInitialState : function(){
    return {
      title: this.props.data
    }
  },
  render: function(){
    return <footer className="footer" style={style.footer}><p className="text-muted">{this.state.title}</p></footer>
  }
});
