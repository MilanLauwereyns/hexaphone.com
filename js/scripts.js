$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){scroll(0,0)});

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});



window.addEventListener("scroll", animateAboutText);

function animateAboutText() {
  var aboutText = document.querySelector(".about-text");
  var aboutTextPosition = aboutText.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (aboutTextPosition < windowHeight) {
    aboutText.classList.add("slide-in");
  } else {
    aboutText.classList.remove("slide-in");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var slideIndex = 0;
  var slides = document.getElementsByClassName('slide');

  showSlide(slideIndex);

  function showSlide(index) {
    if (index < 0) {
      slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
      slideIndex = 0;
    }

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
  }

  function previousSlide() {
    showSlide(--slideIndex);
  }

  function nextSlide() {
    showSlide(++slideIndex);
  }
});


var slideIndex = 0;
var slides = document.getElementsByClassName('slide');

showSlide(slideIndex);

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

function previousSlide() {
  showSlide(--slideIndex);
}

function nextSlide() {
  showSlide(++slideIndex);
}

function copyText(text) {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  alert('Copied: ' + text);
}