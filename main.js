let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = slides.length}//1}
  if (n < 1) {slideIndex = 1}//slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
} 

let images = document.getElementsByClassName("container")

for (i = 0; i < images.length; i++) {

  images[i].addEventListener('touchstart', function (event) {

    nb_touches = event.touches.length 

    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;

  }, { passive: false });
  
  images[i].addEventListener('touchend', function (event) {

    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
      
    handleGestureOnImage(event);


  }, { passive: false });

  images[i].addEventListener('mousedown', function (event) {
    event.preventDefault()
    
    nb_touches = 1 

    touchstartX = event.screenX;
    touchstartY = event.screenY;
  }, { passive: false });
  
  images[i].addEventListener('mouseup', function (event) {
    event.preventDefault()
  
    touchendX = event.screenX;
    touchendY = event.screenY;
    handleGestureOnImage(event);
  }, { passive: false });
} 

function imageClick () {
  let prev = document.getElementById('prev')
  let next = document.getElementById('next')

  if (prev.style.visibility == "visible"){
    prev.style.visibility = "hidden"
    next.style.visibility = "hidden"
  }
  else if (prev.style.visibility == "hidden") {
    prev.style.visibility = "visible"
    next.style.visibility = "visible"
  }
}

swipe_factor = 0.75

function handleGestureOnImage (event) {
  screen_width = window.screen.width

  if (nb_touches == 1){ 
    if (touchendX < touchstartX) {
        if (touchstartX-touchendX >= swipe_factor*screen_width) {
          plusSlides(1)
        }
    }

    else if (touchendX > touchstartX) {
        if (touchendX-touchstartX >= swipe_factor*screen_width) {
          plusSlides(-1)
        }
    }
    else {
      if (event.target.id=="prev") {
        plusSlides(-1)
      }
      else if (event.target.id=="next"){
        plusSlides(1)
      }
      else{
        imageClick();
      }
    }
   }
}


function setTextLanguage (language) {

  document.getElementById("information").innerHTML = document.getElementById(language).innerHTML
}

setTextLanguage("DE")

function buttonSetTextLanguage (event){
  console.log(event.textContent)
  language = event.value
  setTextLanguage(language)
}

var langButtons = document.getElementsByClassName("lang-button")

for (i = 0; i < langButtons.length; i++) {
  langButtons[i].addEventListener('click', function (event) {

    setTextLanguage(event.target.textContent)
    
  }, );
}