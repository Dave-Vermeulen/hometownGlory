let images = [
  '/Images/image_car1.jpg',
  '/Images/image_car2.jpg',
  '/Images/image_car3.jpg'
];

let currentIndex = 0;
let element_image = document.getElementById('image');

// Initial image setup
element_image.setAttribute("src", images[currentIndex]);

// Next button
document.getElementById('next_img').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  element_image.setAttribute("src", images[currentIndex]);
});

// Previous button
document.getElementById('previous_img').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  element_image.setAttribute("src", images[currentIndex]);
});
