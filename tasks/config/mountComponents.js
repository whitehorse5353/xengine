module.exports = function(grunt) {

  // We use the grunt.config api's set method to configure an
  // object to the defined string. In this case the task
  // 'handlebars' will be configured based on the object below.
  grunt.config.set('mountComponents', {
    dev: {
      // We will define which template files to inject
      // in tasks/pipeline.js
      files: {
        '.tmp/public/templates.js': require('../pipeline').componentFilesToInject
      }
    }
  });

  // load npm module for handlebars.
  grunt.loadNpmTasks('grunt-contrib-handlebars');
};
