/**
 * This is just an example file created at Mon Sep 14 2015 23:05:46 GMT+0530 (IST).
 *
 */

var headerDispatcher = require("../dispatcher/header.Dispatcher"),
  extend = require('react/lib/Object.assign'),
  eventEmitter = require('events').EventEmitter,
  emitter = new eventEmitter();

var headerStore = extend(emitter, {
  /* store public methods */

  emitChanges : function(){
    this.emit('change');
  }

});

headerDispatcher.register(function(payload){
  /* store private methods */

  headerStore.emitChanges();

  return true;
});

module.exports = headerStore;
