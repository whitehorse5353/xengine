/**
 * This is just an example file created at Mon Sep 14 2015 23:09:34 GMT+0530 (IST).
 *
 */

var fluxDispatcher = require('flux/lib/Dispatcher'),
  extend = require('react/lib/Object.assign'),
  Dispatcher = new fluxDispatcher();

module.exports = extend(Dispatcher, {
  addCount: function(payload){
    this.dispatch(payload);
  }
});
