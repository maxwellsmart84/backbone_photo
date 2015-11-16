
var Backbone = require('backbone');
var ItemModel = require('./pictureModel');


module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/maxsbb',
  model: ItemModel
});
