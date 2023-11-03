const civilAircrafts = [
  "assets/avion-civil-1.jpg",
  "assets/avion-civil-2.jpg",
  "assets/avion-civil-3.jpg",
  "assets/avion-civil-4.jpg",
  "assets/avion-civil-5.jpg",
];

const militaryAircrafts = [
  "assets/avion-militar-1.jpg",
  "assets/avion-militar-2.jpg",
  "assets/avion-militar-3.jpg",
  "assets/avion-militar-4.jpg",
  "assets/avion-militar-5.jpg",
];

const civilHelicopters = [
  "assets/helicoptero-civil-1.jpg",
  "assets/helicoptero-civil-2.jpg",
  "assets/helicoptero-civil-3.jpg",
  "assets/helicoptero-civil-4.jpg",
  "assets/helicoptero-civil-5.jpg",
];

const militaryHelicopter = [
  "assets/helicoptero-militar-1.jpg",
  "assets/helicoptero-militar-2.jpg",
  "assets/helicoptero-militar-3.jpg",
  "assets/helicoptero-militar-4.jpg",
  "assets/helicoptero-militar-5.jpg",
];

class Gallery {
  constructor(civilImages, militaryImages) {
    this.civilImages = civilImages;
    this.militaryImages = militaryImages;
  }

  getRandomCivil = function () {
    return this.civilImages[
      Math.floor(Math.random() * this.civilImages.length)
    ];
  };

  getRandomMilitary = function () {
    return this.militaryImages[
      Math.floor(Math.random() * this.militaryImages.length)
    ];
  };

  getAll = function () {
    const allImages = [...this.civilImages, ...this.militaryImages];
    return allImages;
  };
}

class Painter {
  constructor() {
    this.createGallery();
  }

  createGallery = function () {
    this.gallery = document.createElement("section");
    document.body.append(this.gallery);
  };

  createImageTag(imageUrl) {
    const picture = document.createElement("picture");
    const img = document.createElement("img");
    picture.appendChild(img);
    img.src = imageUrl;
    return picture;
  }

  paintSingleImage(imageUrl) {
    this.gallery.appendChild(this.createImageTag(imageUrl));
  }

  paintMultipleImages(arrayOfImages) {
    for (const image of arrayOfImages) {
      this.paintSingleImage(image);
    }
  }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();
