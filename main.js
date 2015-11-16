
var _ = require('underscore');
var $ = require('jquery');
var PictureCollection = ('./pictureCollection');
var PictureModel = ('./pictureModel');


$(document).ready(function(){
  
  var formSubmit =
    $("form").submit(function(event){
      event.preventDefault();
      var imgURL = ('#imgURLInput').val();
      var titleInput = ('#titleInput').val();
      var newModel = new PictureModel ({picture: imgURL, title: titleInput});
      newModel.save();
  });


});
