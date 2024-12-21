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

let images = document.getElementsByClassName("image")
let is_multitouch = false

for (i = 0; i < images.length; i++) {
  //images[i].onclick = imageClick;

  images[i].addEventListener('touchstart', function (event) {
    if(event.touches.length == 1) {
      is_multitouch = false
    }
    else {
      is_multitouch = true
    }

    if (!is_multitouch) {
      event.preventDefault()
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
    }
  }, { passive: false });
  
  images[i].addEventListener('touchend', function (event) {
    if(!is_multitouch) {
      event.preventDefault()
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      handleGestureOnImage();
    }
  }, { passive: false });

  images[i].addEventListener('mousedown', function (event) {
    event.preventDefault()
    touchstartX = event.screenX;
    touchstartY = event.screenY;
  }, { passive: false });
  
  images[i].addEventListener('mouseup', function (event) {
    event.preventDefault()
    touchendX = event.screenX;
    touchendY = event.screenY;
    handleGestureOnImage();
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

swipe_factor = 0.3

function handleGestureOnImage() {
  screen_width = window.screen.width

  if (touchendX < touchstartX) {
      //console.log('Left');
      if (touchstartX-touchendX >= swipe_factor*screen_width) {
        //console.log('Swiped Left')
        plusSlides(1)
      }
  }

  if (touchendX > touchstartX) {
      console.log('Swiped Right');
      if (touchendX-touchstartX >= swipe_factor*screen_width) {
        //console.log('Swiped Left')
        plusSlides(-1)
      }
  }

  if (touchendY < touchstartY) {
      //console.log('Swiped Up');
  }

  if (touchendY > touchstartY) {
      //console.log('Swiped Down');
  }

  if (touchendX == touchstartX) {
    imageClick();
  }
}
