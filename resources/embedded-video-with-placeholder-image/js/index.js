$('.video__placeholder, .video__button').on('click', function() {
  if ( !$('#video-player').length ) {
    var video = '<iframe id="video-player" src="' + $('.video__placeholder').attr('data-video') + '" frameborder="0" allowfullscreen wmode="opaque"></iframe>';
    $(video).insertAfter( $('.video__placeholder') );
    $('.video__button').addClass('is-playing');
  } else {
    $('.video__button').removeClass('is-playing');
    $('#video-player').remove();
  }
});