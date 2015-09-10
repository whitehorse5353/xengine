/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function (grunt) {

  grunt.config.set('watch', {
    api: {

      // API files to watch:
      files: ['api/**/*', '!**/node_modules/**']
    },
    assets: {

      // Assets to watch:
      files: ['assets/**/*', 'tasks/pipeline.js', '!**/node_modules/**'],

      // When assets are changed:
      tasks: ['syncAssets', 'linkAssets']
    },
    componentFactory: {
      // Components Factory to watch:
      files: ['component-factory/**/*.js'],

      // When component code changed
      tasks: ['browserify:dist'],

      options: {
        spawn: false,
        event: ['changed']
      }
    }
  });

  grunt.event.on('watch', function (action, filepath) {
    var path = require('path');
    var componentRootPath = {};
    var filePathArr = filepath.split('/');
    componentRootPath['assets/js/components/bundle.' + filePathArr.slice(filePathArr.length - 1, filePathArr.length).join('')] = filepath;

    grunt.config('browserify.dist.files', componentRootPath);
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
