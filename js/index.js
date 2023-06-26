var banners = document.querySelectorAll(".banner");
var dots = document.querySelectorAll(".dot");
var currentIndex = 0;

function showBanner(index) {
  for (var i = 0; i < banners.length; i++) {
    banners[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  banners[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextBanner() {
  currentIndex++;
  if (currentIndex === banners.length) {
    currentIndex = 0;
  }
  showBanner(currentIndex);
}

setInterval(nextBanner, 3000); // Troca de banner a cada 3 segundos (3000ms)
