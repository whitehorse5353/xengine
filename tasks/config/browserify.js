var pipe = require('../pipeline').componentFilesToInject;
var _ = require('lodash');
var glob = require('glob');
var Promise = require('bluebird');
var path = require('path');
var util = require('util');

module.exports = function (grunt) {
  var getComponentFiles = new Promise(function (resolve, reject) {
    _.map(pipe, function (componentsPath) {
      glob(componentsPath, function (er, files) {
        if (er) {
          return reject(er);
        }

        var fileList = [];
        _.each(files, function (file) {
          if (file.indexOf('build') < 0 || file.indexOf('bundle') < 0) {
            var filePathArr = file.split('/');
            var op = {};
            op['assets/js/components/bundle.' + filePathArr.slice(filePathArr.length - 1, filePathArr.length).join('')] = file;
            fileList.push(op);
          }
        });
        return resolve(fileList)
      });
    });
  });

  function setComponentPath() {
    getComponentFiles.then(function (listOfUrls) {
      var aliasArr = _.map(listOfUrls, function (value) {
        var alias = _.values(value)[0].split('/'),
          op = {};
        op[alias.slice(alias.length - 1, alias.length)[0].split('.js')[0]] = _.keys(value)[0];
        return op;
      });
      //console.log(listOfUrls);
      //grunt.config('browserify.lift.alias', aliasArr);
      grunt.config('browserify.lift', {files: listOfUrls});
    });
  }
  grunt.config.set('browserify', {
    dist: {
      files: {
        "component-factory/build/bundle.js": "component-factory/**/*.js"
      }
    },
    serve: {
      files: setComponentPath()
    },
    lift: {
      files: {}
    },
    options: {
      transform: [['babelify', {compact: true, stage: [0]}]],
      browserifyOptions: {
        //bundleExternal: false // remove react bundling in all places
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};
