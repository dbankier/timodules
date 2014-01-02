var path = require('path'),
    fs = require('fs'),
    xml2js = require("xml2js"), 
    _ = require("underscore"),
    parser = new xml2js.Parser(),
    sys = require("sys"),
    tiapp = require("tiapp"),
    exec = require("child_process").exec;

function walk(p, callback) {
  tiapp.find(p, function(err, result) {
    if (err) callback(err, null);
    else {
      if (err || !result.obj['ti:app']['modules']) walk(path.dirname(resul.path), callback);
      else {
        var modules = [];
        var read = result.obj['ti:app']['modules'];
        if (read[0].module && read[0].module.length > 0) {
          read[0].module.forEach(function(curr) {
            modules.push({
              name: curr._,
              platform: curr.$.platform,
              version: curr.$.version
            });
          });
        }
        callback(null, {path: result.path,  current: modules});
      }
    }
  });
}
exports.getCurrent = walk;

exports.list = function(p, callback) {
  function puts(error, stdout, stderr) {
    if (error || stderr) {
      callback(error || stderr, null);
    }
    var tiapp_result = JSON.parse(stdout); 
    
    walk(p, function(err, result) {
      var ret = {
        modules: tiapp_result
      };
      if (result) {
        _.extend(ret, result);
      }
      callback(err, ret);
    });
  }
  exec("titanium module --output json", puts);
};

