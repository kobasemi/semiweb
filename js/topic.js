$(document).ready(function() {
  _topicLiNum = Math.floor(($("#topicUl > li").length - 1) / 5);
  _topicCurNum = 0;
  // window_height = $(window).height(); //global
  // topic_wrap_height = window_height * 0.77;
  topic_wrap_height = $("#topicUl").innerHeight();
  controlBtn();
});

$(document).on('click', "#ue", function() {
  _topicCurNum -= 1;
  controlBtn();
  animateY(-_topicCurNum * topic_wrap_height);
});

$(document).on('click', "#shita", function() {
  _topicCurNum += 1;
  controlBtn();
  animateY(-_topicCurNum * topic_wrap_height);
});

$(window).on('resize', function() {
  window_height = $(window).height(); //global
});



function controlBtn() {
  $("#topicBtn").empty();

  if (_topicCurNum == 0) {
    $("#topicBtn").append('<div id="shita"><span class="icon-circle-down"></span></div><div id="dummy_ue"><span class="icon-circle-up"></span></div>');
  } else if (_topicCurNum < _topicLiNum) {
    $("#topicBtn").append('<div id="shita"><span class="icon-circle-down"></span></div><div id="ue"><span class="icon-circle-up"></span></div>');
  } else {
    $("#topicBtn").append('<div id="dummy_shita"><span class="icon-circle-down"></span></div><div id="ue"><span class="icon-circle-up"></span></div>');

  }
}

function animateY(posY) {
  $("#topicUl").stop().animate({
    marginTop: posY + 'px'
  }, '300', 'easeOutQuart');
}
