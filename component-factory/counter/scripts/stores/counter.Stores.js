/**
 * This is just an example file created at Mon Sep 14 2015 23:09:34 GMT+0530 (IST).
 *
 */

var counterDispatcher = require("../dispatcher/counter.Dispatcher"),
  extend = require('react/lib/Object.assign'),
  eventEmitter = require('events').EventEmitter,
  emitter = new eventEmitter();

var count = 1;
var counterStore = extend(emitter, {
  /* store public methods */

  emitChanges: function () {
    this.emit('change');
  },

  getCounterValue: function () {
    return count;
  }

});

counterDispatcher.register(function (payload) {
  /* store private methods */
  if (payload.typeOfAction === 'ADD_COUNT') {
    count++;
  }
  counterStore.emitChanges();

  return true;
});

module.exports = counterStore;
