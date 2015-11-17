
var _ = require('underscore');
var $ = require('jquery');
var PictureCollection = require('./pictureCollection');
var PictureModel = require('./pictureModel');
var collector = new PictureCollection();
var model = new PictureModel();

$(document).ready(function(){
  page.init();
  var collector = new PictureCollection();
  var model = new PictureModel();
  });

var page = {
  init: function (){
    page.events();
},

events: function () {
  page.dataSubmit();
  page.dataToPage();
  page.upVote();
},

dataToPage: function() {
  var data = new PictureCollection();
  data.fetch().then(function(myData){
    myData.forEach(function(el, idx, arr){
      var title = el.title;
      var url = el.picture;
      var id = el._id;
      $('#dataStuff').append("<li id='" + id + "'" + "class='col-md-4'>" + "<button id='upVote' class='btn btn-primary'><span class='glyphicon glyphicon-sunglasses' aria-hidden='true'></span></button>" + "<h1>" + title + "</h1>" + "<img src=" + url + ">" + "</li>");
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
      page.dataToPage();
    });
  },

  upVote: function() {
    $("#dataStuff").on("click", "#upVote", function(event){
      event.preventDefault();
      collector.fetch().then(function(myData){
        myData.forEach(function(el){
        var id = el.id;
        if ($(this).parent().attr('_id') === id) {
            id += 1;
          }
      });
    });
  });
 },
};
