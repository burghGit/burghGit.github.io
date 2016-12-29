(function() {
  var $somethingNice = $('.js-something-nice');
  var $hero = $('.js-hero');


  TweenMax.to(".logo", 2, {left:600});

  /* parallax */

  $(window).scroll(function(){
    $hero.css('background-position','100%' +($(window).scrollTop()*0.5)+'px');

  if ($(window).scrollTop() > $($services).offset().top - $(window).scrollTop()) {
    $($services).css('background-position','100%' +(($(window).scrollTop() - $($services).offset().top)*0.5)+'px');
    }
    
  if ($(window).scrollTop() > $($footer).offset().top - $(window).scrollTop()) {
    $($footer).css('background-position','100%' +(($(window).scrollTop() - $($footer).offset().top)*0.5)+'px');
    }
  });

  /* full height hero */

  $($hero).css('height', $(window).height() + 'px');
  if ($(window).width() > 700) {
  	$($about).css('margin-top', $(window).height() + 'px');
  } else {
    $($about).css('margin-top', 'auto');
  }
  $($somethingNice).css('margin-top', ($(window).height()/2)- ($($somethingNice).height()/1.5) + 'px')

  /* nav scroll */

  $($homelink).click(function() {
    	$('html, body').stop();
      $('html, body').animate({
          scrollTop: $($hero).offset().top
      }, 2000);
  });
  $($aboutlink).click(function() {
    	$('html, body').stop();
      $('html, body').animate({
          scrollTop: $($about).offset().top
      }, 2000);
  });
  $($serviceslink).click(function() {
    	$('html, body').stop();
      $('html, body').animate({
          scrollTop: $($services).offset().top
      }, 2000);
  });
  $($contactlink).click(function() {
    	$('html, body').stop();
      $('html, body').animate({
          scrollTop: $($contact).offset().top
      }, 2000);
  });

  /* diamonds */

  $('.services--main--design--p, .services--main--design--diamond').click(function() {
    $('.selected').removeClass('selected');
    $design.addClass('selected');
    replaceText('DESIGN', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Rich McClintock not simply. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.');
  });

  $('.services--main--marketing--p, .services--main--marketing--diamond').click(function() {
    $('.selected').removeClass('selected');
    $marketing.addClass('selected');
    replaceText('MARKETING', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.');
  });

  $('.services--main--development--p, .services--main--development--diamond').click(function() {
    $('.selected').removeClass('selected');
    $development.addClass('selected');
   replaceText('DEVELOPMENT', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting')
  });

  function replaceText (h1, p) {
    $('.services--text--h1, .services--text--p').css('opacity', '0')
    setTimeout(function(){
      $('.services--text--h1').html(h1);
      $('.services--text--p').html(p);
      $('.services--text--h1, .services--text--p').css('opacity', '1')
    }, 300);
    
  }

  $(window).on('resize',function(){location.reload();});
})();