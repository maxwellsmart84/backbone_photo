
var Backbone = require('backbone');

module.exports = Backbone.Model.extend ({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/maxsbb',
  idAttribute: '_id',
  defaults: {
    votes: 0,
    picture: "No picture uploaded",
  }
});
