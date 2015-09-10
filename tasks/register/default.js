module.exports = function (grunt) {
  grunt.registerTask('default', ['compileAssets', 'linkAssets', 'clean:components', 'watch']);
};
