/**
 * This is just an example file created at Mon Sep 14 2015 23:09:34 GMT+0530 (IST).
 *
 */

var counterDispatcher = require("../dispatcher/counter.Dispatcher");

module.exports = {
  addCount: function (count) {
    counterDispatcher.addCount({
      typeOfAction: 'ADD_COUNT',
      count: count
    });
  }
};
