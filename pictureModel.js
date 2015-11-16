
var Backbone = require('backbone');

module.exports = Backbone.Model.extend ({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/maxsbb',
  idAttribute: '_id',
  defaults: {
    likes: 0,
    picture: "http://reactionimage.org/img/gallery/704257793.jpg",
    title: "No Title Yet"
  }
});
