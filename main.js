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
for (i = 0; i < images.length; i++) {
  images[i].onclick = imageClick;
  images[i].ontouchend = imageClick;
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