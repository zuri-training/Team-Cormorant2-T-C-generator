$('#next').click(function () {
  var $next = $('.progress-dot ul li.current').removeClass('current').addClass('complete').next('li');
  if ($next.length) {
    $next.removeClass('complete').addClass('current');
    //console.log('Prev');
  } 
  else {
    $(".progress-dot ul li:first").removeClass('complete').addClass('current');
    if (".progress-dot ul li:last") {
      $('.progress-dot ul li').removeClass('current').removeClass('complete').removeAttr('class');
      $(".progress-dot ul li:first").addClass('current');
    }
    //console.log('Next');
  }
});

$('#prev').click(function () {
  var $prev = $('.progress-dot ul li.current').removeClass('current').removeClass('complete').removeAttr('class').prev('li');
  if ($prev.length) {
    $prev.removeClass('complete').addClass('current');
    //console.log('Prev');
  } else {
    $(".progress-dot ul li:first").removeClass('complete').addClass('current');
    $(".progress-dot ul li:last").removeClass('current').removeClass('complete').removeAttr('class');
    //console.log('Prev');
  }
});


//get all elements from progress bar

const allitems = document.querySelectorAll(".progress ul li a");

allitems.forEach(item => {
  item.addEventListener("click", function(e) {
    for (var i = 0; i < allitems.length; i++) {
      allitems[i].classList.remove("active");
    }
    this.classList.add("active");
  });
});