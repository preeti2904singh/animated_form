$(document).ready(function(){
  $('#toggle').change(function(){
    if(this.checked){
      $('.home_screen').hide();
      $('.form_wrap').show();
      $('.dots').css({"top": "36px", "right": "48px"}).addClass('animated fadeInDown');
      $('.dropdown-menu li a').hidden();
    }
    else{
      $('.home_screen').show();
      $('.form_wrap').hide();
      $('.dots').css({"top": "0px", "right": "20px"}).addClass('animated fadeInUp');
      $('.dropdown-menu li a').hidden();
    }
  });

  $(".arrow_down").on('click', function () {
    $('.dropdown-menu').slideToggle();
    $(this).find('img').toggleClass('arrow_down arrow_up');
  });

  $(".dropdown-menu li a").on("click", function(e){
    e.preventDefault();
    var $this = $(this).parent();
    $(".head_txt").val($this.data("value"));
    $('.placeholder').hide();
  });

  $('.input_txt').on("focus",function(e){
    $(this).next('.placeholderDiv').css("visibility","hidden");
  });
  $('.input_txt').on("blur",function(e){
    if($(this).val().length == 0)
      $(this).next('.placeholderDiv').css("visibility","visible");
  });

});