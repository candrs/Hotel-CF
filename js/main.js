$(document).on('ready',function(){
  init();
});

function init() {
  $('.slider_controls li').on('click',handleClick);
  var width = $('.slider_container').width();
  $('.slide').each(function (i,e) {
    var url = $(e).data('background');
    $(e).css('width',width+'px');
    $(e).css('background-image',"url("+(url+".jpg")+")");
  });
}

function handleClick() {
  var slide_target = 0;
  if ($(this).parent().hasClass('slider_controls')) {
    slide_target = $(this).index();
  }
  // alert(-(slide_target * $('.slide').width()));
  $('.slideContainer').fadeOut('slow',function () {
    $(this).animate({
      'margin-left':-(slide_target * $('.slider_container').width())+'px'
    },'slow',function () {
      $(this).fadeIn();
    });
  });
}
