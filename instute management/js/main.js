$(() => {

  const $body = $("body"),
    $header = $("header");

  $('.nav-button').click(() =>{
    $('.login-wrapper').fadeIn();
  });
  $('.close').click(() =>{
    $('.login-wrapper').fadeOut();
  });

  const scrollTop = () => {
    const scroll = $(window).scrollTop();
    if (scroll >= 0) {
      $header.addClass("scrolled");
    } else {
      $header.removeClass("scrolled");
    }
  };

  window.onscroll = scrollTop;
  window.onload = scrollTop;

  $('.slider').slick({
    fade: true,
  });
  $('.logo-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    fade: false,
    cssEase: 'linear',
    slidesToShow: 4,
  });

  $(document).ready(function(){
    $('#birth-date').mask('00/00/0000');
    $('#phone-number').mask('0000-0000');
   })
   
   $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })

});