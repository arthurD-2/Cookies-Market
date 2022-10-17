let count = 1;
document.getElementById("radio1");
setInterval(function () {
  nextImage();
}, 4000);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

// slider 2

let time = 5000,
  currentImageIndex = 0,
  images = document.querySelectorAll("#slider2 img"),
  max = images.length;

function nextImages() {
  images[currentImageIndex].classList.remove("selected");

  currentImageIndex++;

  if (currentImageIndex >= max) currentImageIndex = 0;

  images[currentImageIndex].classList.add("selected");
}

function start() {
  setInterval(() => {
    //troca de imagem
    nextImages();
  }, time);
}
window.addEventListener("load", start);
