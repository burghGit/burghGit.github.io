$('.play').click(function() {
  video = '<iframe width="500" height="281" frameborder="0" src="' + $('img').attr('data-video') + '"></iframe>';
  $('.video').replaceWith(video);
});