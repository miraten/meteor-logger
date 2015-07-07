Package.describe({
  name: 'leesangwon:logger',
  version: '0.1.0',
  summary: 'A simple Meteor logger that works on the server',
  git: 'https://github.com/miraten/meteor-logger',
  documentation: 'README.md'
});

Npm.depends({ winston: "1.0.1" });

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('logger.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('leesangwon:logger');
  api.addFiles('logger-tests.js');
});
