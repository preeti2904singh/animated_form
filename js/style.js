$(document).ready(function(){
  $('.dot').on('click', function () {
      $('.home_screen').hide();
      $('.form_wrap').show();
  });
  $('.close_btn').on('click', function () {
    $('.home_screen').show('slow');
    $('.form_wrap').hide();
    $('.search_input').addClass('animated fadeInUp').removeClass('animated fadeInDown');
  });
  $(document).on('input', '.textArea', function () {
    if ($('.textArea').val()) {
      $('.placeholderDiv').hide();
    } else {
      $('.placeholderDiv').show();
    }
  });
  $(".dropdown-menu li a").click(function(){
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="arrow_down"></span>');
  });
});