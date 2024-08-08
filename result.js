const animalImages = {
  snake: [
    'Firefly a body of a snake head of a fox- reailstic 66346.jpg',
  ],
  bear: [
    'Firefly a body of a bear head of fox reailstic 15548.jpg',
    'Firefly a body of a bear head of fox reailstic 66866.jpg',
  ],
  horse: [
    'Firefly a body of a horse head of fox reailstic 27107.jpg',
    'Firefly a body of a horse head of fox reailstic 27222.jpg',
    'Firefly a body of a horse head of fox reailstic 60402.jpg',
    'Firefly a body of a horse head of fox reailstic 66866.jpg',
    'Firefly a body of a horse head of fox reailstic 89230.jpg',
    'Firefly a body of a horse head of fox reailstic 91824.jpg',
  ],
  bird: [
    'Firefly a body of a bird with a head of a fox. orange reailstic 32235.jpg',
    'Firefly a body of a bird with a head of a fox. orange reailstic 47488.jpg',
    'Firefly a body of a bird with a head of a fox. orange reailstic 52195.jpg',
    'Firefly a body of a bird with a head of a fox. orange reailstic 81452.jpg',
  ],
  turtle: [
    'Firefly a fox with a turtle shell on its back 83584.jpg',
    'Firefly orange turtle with fox ears and fox nose looking to the left 8611.jpg',
    'Firefly orange turtle with fox ears looking to the left 69035.jpg',
  ],
  zebra: [
    'Firefly half fox half zebra 17997.jpg',
  ],
  cow: [
    'Firefly a cow with a head of a fox looking to the side 29522.jpg',
    'Firefly fox with bodey of cow looking to the side 18527.jpg',
    // 'Firefly fox with bodey of cow looking to the side 59020.jpg',
    'Firefly fox with bodey of cow looking to the side 73678.jpg',
    'Firefly fox with body of cow looking to the side 66255.jpg',
    'Firefly fox with body of cow looking to the side 73678.jpg',
    'Firefly fox with body of cow looking to the side 93741.jpg',
  ],
  deer: [
    'Firefly a deer with a head of a fox looking to the side 49257.jpg',
    'Firefly deerfox 18554.jpg',
    'Firefly deerfox 88230.jpg',
    'Firefly deerfox from close, looking to the side 88230.jpg',
    'Firefly deerfox with entlers from close, looking to the side 97102.jpg',
  ],
  giraffe: [
    'Firefly fox with body of giraffe looking to the side 79585.jpg',
  ],
  monkey: [
    'Firefly half a fox half a monkey. on a tree from close, looking to the side 29522.jpg',
    'Firefly half a fox half a monkey. on a tree from close, looking to the side 93951.jpg',
    'Firefly monkey with a head of a fox. on a tree from close, looking to the side 66777.jpg',
    'Firefly monkey with a head of a fox. on a tree from close, looking to the side 93951.jpg',
  ],
  jellyfish: [
    'Firefly jellyfish with fox ears and face, realistic 31996.jpg',
    'Firefly orange jellyfish with fox ears 45082.jpg',
    // 'Firefly orange jellyfish with fox ears and face, realistic 77155.jpg',
    // 'Firefly orange jellyfish with fox ears and face, realistic 82989.jpg',
    // 'Firefly orange jellyfish with fox face 11277.jpg',
  ],
};

const animalTitles = {
  snake: 'Foxnake',
  bear: 'Foxbear',
  horse: 'Fhorxe',
  bird: 'Foxbird',
  turtle: 'Foxtle',
  zebra: 'Foxbra',
  cow: 'Foxcow',
  deer: 'Deerfox',
  giraffe: 'Giraffox',
  monkey: 'Foxkey',
  jellyfish: 'Jellyfox',
};

function rndItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const urlParams = new URLSearchParams(window.location.search);
const animalName = urlParams.get('animal');
const animalTitle = animalTitles[animalName];
const imgUrl = 'Images/' + rndItem(animalImages[animalName]);

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('animal_title').innerText = animalTitle;
  document.getElementById('download_link').href = imgUrl;
  // document.getElementById('animal_img').src = imgUrl;
  setTimeout(() => document.getElementById('animal_img').setAttribute('src', imgUrl), 1500);
});
