var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('projects', {
    id: { type: 'int', primaryKey: true },
    title: 'string',
    author: 'string',
    degreeTrack: 'string',
    program: 'string',
    medium: 'string',
    measurements: 'string',
    url: 'string',
    assetUrl: 'string',
    category: 'string'
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('projects', callback);
};
