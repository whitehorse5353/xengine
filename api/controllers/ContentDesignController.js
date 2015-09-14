/**
 * ContentDesignController
 *
 * @description :: Server-side logic for managing contentdesigns
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var React = require('react');
var _ = require('lodash');
var path = require('path');
var componentFactory = path.resolve(__dirname, '../../component-factory');

function _simpleUtil(filename) {
  return filename.substring(0, 1).toUpperCase() + filename.substring(1, filename.length);
  //return filename;
}

function getComponents(components) {
  return _.map(components, function (val, key) {
    return {
      componentPath: componentFactory + '/' + key + '/scripts/components/' + key + '.Component',
      classPath: [_simpleUtil(key)],
      componentMetaData: val
    };
  });
}

function renderComponents(componentsMetaData) {
  require('node-jsx').install();
  return _.map(componentsMetaData, function (componentMetaData) {
    var Component = require(componentMetaData.componentPath)[componentMetaData.classPath];
    return {
      html: React.renderToString(React.createElement(Component,
        {
          data: componentMetaData.componentMetaData[componentMetaData.componentMetaData.length - 1].title
        })),
      wrapperName: componentMetaData.classPath[0]
    };
  });
}

function executePublisher(pageMetaData, componentMeta, res) {
  var exec = require('child_process').exec;

  exec('sails generate publisher ' + pageMetaData.pageName + ' ' + _.keys(componentMeta).join(' '), function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }

    console.log(stdout);

    console.log("running browserify ." + path.resolve(__dirname, '/assets/' + pageMetaData.pageName + '/scripts/main.js') + ' -t [babelify] >| .' + path.resolve(__dirname, '/assets/' + pageMetaData.pageName + "/scripts/bundle.js"));

    exec('browserify .' + path.resolve(__dirname, '/assets/' + pageMetaData.pageName + '/scripts/main.js') + ' -t [babelify] >| .' + path.resolve(__dirname, '/assets/' + pageMetaData.pageName + '/scripts/bundle.js'), function (err, stdoutIn, stderrIn) {
      console.log(stderrIn);

      res.end('page published successfully..!!');
    });
  });
}

module.exports = {
  createPage: function (req, res) {
    PageProperties.create({pageName: req.param('pageroot')})
      .exec(function (er, dt) {
        if (er) return res.badRequest(er);
        res.redirect('/createPage/' + dt.id);
      });

  },
  loadExistingPage: function (req, res) {
    PageProperties.findOne(req.params['pageId'])
      .exec(function (err, pageMetaData) {
        if (err) return res.error(err);
        var ComponentsMeta = getComponents(pageMetaData.components),
          Components = renderComponents(ComponentsMeta);
        ComponentCollection.find()
          .exec(function (err, components) {
            if (err) return res.error(err);
            res.view('configurator', {
              components: components,
              pageName: pageMetaData.pageName,
              pageRefId: req.params['pageId'],
              pageLevelComponents: pageMetaData.components,
              pageLevelComponentCollection: Components
            });
          });
      });
  },
  addOptions: function (req, res) {
    PageProperties.findOne({id: req.params['pageId']})
      .exec(function (err, record) {
        if (err) return res.error(err);

        if (record.components[req.query.component]) {
          record.components[req.query.component].push(req.query);
        } else {
          record.components[req.query.component] = [req.query];
        }
        record.save(function (er, dt) {
          if (er) return res.error(er);
        });
      });
    return res.ok(200);
    //return res.redirect('/createPage/'+req.params['pageId']);
  },
  publishPage: function (req, res) {
    PageProperties.findOne(req.params['pageId'])
      .exec(function (err, pageMetaData) {
        if (err) return res.error(err);
        var componentMeta = {};
        _.each(getComponents(pageMetaData.components), function (component) {
          componentMeta[component.classPath] = component.componentPath;
        });

        executePublisher(pageMetaData, componentMeta, res);
      });
  }
};

