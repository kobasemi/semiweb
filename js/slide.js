$(document).ready(function() {
  var _liNum = $(".topSlide ul li").length;
  _curNum = 0;
  var _slideTimerID;
  slide_width = $('#topSlide').width(); //global
  xStartTimer();


  function xStartTimer() {
    xStopTimer();
    console.log("xStart");
    _slideTimerID = setInterval(
      function() {
        _curNum++;
        console.log("_curNum" + _curNum);
        console.log("_liNum" + _liNum);
        if (_curNum > _liNum - 1) {
          _curNum = 0;
        }
        slide_anime();
      }, 4000);
  }



  function xStopTimer() {
    clearInterval(_slideTimerID);
  }

  function slide_anime() {
    var posX = -slide_width * _curNum;
    // console.log(posX);
    xStartTimer();
    $(".topslider").stop().animate({
      marginLeft: posX + 'px'
    }, '300', 'easeOutQuart');
    return false;
  }
});



$(window).on('resize', function() {
  slide_width = $(window).width(); //global
  console.log(slide_width);
});
