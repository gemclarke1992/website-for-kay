let currentIndex = 0;
const displayedImage = document.querySelector(".gallery-img");
const thumbBar = document.querySelector(".thumb-bar");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

const images = [
  {
    filename: "mainimage.jpeg",
    alt: "",
  },

  {
    filename: "odin.jpg",
    alt: "",
  },
  {
    filename: "thor.jpg",
    alt: "",
  },
  {
    filename: "loki.jpg",
    alt: "",
  },
  {
    filename: "fenrir.jpg",
    alt: "",
  },
  {
    filename: "jog.jpg",
    alt: "",
  },
  {
    filename: "hel.jpg",
    alt: "",
  },
  {
    filename: "freyja.jpg",
    alt: "",
  },
];

const baseURL = "images/";

function updateDisplayedImage() {
  displayedImage.src = `${baseURL}${images[currentIndex].filename}`;
  displayedImage.alt = images[currentIndex].alt;
}

(images.forEach((image, index) => {
  const newImage = document.createElement("img");
  newImage.src = `${baseURL}${image.filename}`;
  newImage.alt = image.alt;
  newImage.tabIndex = "0";

  newImage.addEventListener("click", () => {
    console.log("Thumbnail clicked:", index);
    currentIndex = index;
    updateDisplayedImage();
  });

  thumbBar.appendChild(newImage);
}),
  leftButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateDisplayedImage();
  }));

rightButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1 + images.length) % images.length;
  updateDisplayedImage();
});

updateDisplayedImage();
