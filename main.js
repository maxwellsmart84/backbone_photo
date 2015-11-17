
var _ = require('underscore');
var $ = require('jquery');
var PictureCollection = require('./pictureCollection');
var PictureModel = require('./pictureModel');


$(document).ready(function(){
  page.init();
  window.PictureCollection = new PictureCollection();
  });

var page = {
  init: function (){
    page.events();
},

events: function () {
  page.dataSubmit();
  page.dataToPage();
},

dataToPage: function() {
  var data = new PictureCollection();
  data.fetch().then(function(myData){
    myData.forEach(function(el, idx, arr){
      var title = el.title;
      var url = el.picture;
      $('#dataStuff').append("<li>" + "<button class='btn btn-primary btn-sm'><span class='glyphicon glyphicon-sunglasses' aria-hidden='true'></span>" + "Like" + "</button>" + "<h1>" + title + "</h1>" + "<img src=" + url + ">" + "</li>");
    });
  });

  },

dataSubmit: function() {
    $("form").submit(function(event){
      event.preventDefault();
      var imgURL = $('#imgURLInput').val();
      var titleInput = $('#titleInput').val();
      var newModel = new PictureModel({picture: imgURL, title: titleInput});
      newModel.save();
    });
  },
};
