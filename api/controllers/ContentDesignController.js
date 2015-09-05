/**
 * ContentDesignController
 *
 * @description :: Server-side logic for managing contentdesigns
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var exec = require('child_process').exec;

module.exports = {
  createPage: function(req, res){
    exec('sails generate publisher ' +req.param('pageroot'), function(error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
      res.end('thanks');
      //res.render('');
    });
  }
};

