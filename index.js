var fs = require('fs');
var path = require('path');
var deconstControl = require('deconst-control');
var sites = [];

JSON.parse(fs.readFileSync(path.resolve(__dirname, 'sites.json'), 'utf-8')).forEach(function (site) {
  sites.push(require(site.moduleName));
});

var instance = new deconstControl.Instance({
  baseDir: __dirname,
  sites: sites,
  otherProp: 'bar'
});

module.exports = instance;
