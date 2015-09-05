/**
 * ContentDesignController
 *
 * @description :: Server-side logic for managing contentdesigns
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var exec = require('child_process').exec;

module.exports = {
  createPage: function (req, res) {
    PageProperties.create({pageName: req.param('pageroot')})
      .exec(function (er, dt) {
        if (er) return res.badRequest(er);
        res.redirect('/createPage/'+dt.id);
      });

  },
  loadExistingPage: function(req, res){
    PageProperties.findOne(req.params['pageId'])
      .exec(function(err, pageMetaData){
        if (err) return res.error(err);

        ComponentCollection.find()
          .exec(function (err, components) {
            if (err) return res.error(err);
            res.view('configurator', {
              components: components,
              pageName: pageMetaData.pageName,
              pageRefId: req.params['pageId'],
              pageLevelComponents: pageMetaData.components
            });
          });
      });
  },
  addOptions: function (req, res) {
    PageProperties.findOne({id: req.params['pageId']})
      .exec(function (err, record) {
        if (err) return res.error(err);

        if(record.components[req.query.component]){
          record.components[req.query.component].push(req.query);
        }else{
          record.components[req.query.component] = [req.query];
        }
        record.save(function (er, dt) {
          if (er) return res.error(er);
        });
      });
    return res.ok(200);
    //return res.redirect('/createPage/'+req.params['pageId']);
  },
  publishPage: function () {
    exec('sails generate publisher ' + req.param('pageroot'), function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
      res.end('thanks');
    });
  }
};

