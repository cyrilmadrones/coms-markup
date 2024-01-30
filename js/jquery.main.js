function openSearch() {
  $('#search-overlay').fadeIn('fast');
  document.body.style.overflowY = "hidden";
  document.getElementById("searchCourse").focus();
}

function closeSearch() {
  $('#search-overlay').fadeOut('fast');
  document.body.style.overflowY = "scroll";
}

function findCourse() {
  $('#findcourse-overlay').fadeIn('fast');
  document.body.style.overflowY = "hidden";
  document.getElementById("searchCourse").focus();
}

function closeCourse() {
  $('#findcourse-overlay').fadeOut('fast');
  document.body.style.overflowY = "scroll";
}

$('.provider-slider').slick({
  arrows: true,
  dots: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

function anchorScroll(id) {

  $('html, body').animate({
      scrollTop: $($("#" + id)).offset().top - 55
  }, 500);

}