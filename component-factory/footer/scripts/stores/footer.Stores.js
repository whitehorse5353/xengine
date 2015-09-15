/**
 * This is just an example file created at Mon Sep 14 2015 23:06:20 GMT+0530 (IST).
 *
 */

var footerDispatcher = require("../dispatcher/footer.Dispatcher"),
  extend = require('react/lib/Object.assign'),
  eventEmitter = require('events').EventEmitter,
  emitter = new eventEmitter();

var footerStore = extend(emitter, {
  /* store public methods */

  emitChanges : function(){
    this.emit('change');
  }

});

footerDispatcher.register(function(payload){
  /* store private methods */

  footerStore.emitChanges();

  return true;
});

module.exports = footerStore;
