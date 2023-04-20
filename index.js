function toggleShowAndHideNavMenu() {
  var x = document.getElementById("nav-list");
  var y = document.getElementById("bi-x");
  if (x.className === "nav-list") {
    x.className += " responsive";
    y.style.display = "block";
  } else {
    x.className = "nav-list";
    y.style.display = "none";
  }
}


$('.section__hero__slider').slick(
  {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
  }
);
$('.users__experience__slider').slick(
  {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: false,
    nextArrow: false
  }
);

