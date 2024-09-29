document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'Images/image_car1.jpg',
        'Images/image_car2.jpg',
        'Images/image_car3.jpg'  
    ];

    let currentIndex = 0;
    const carouselImage = document.getElementById('carousel-image');
    const previousButton = document.getElementById('previous-img');
    const nextButton = document.getElementById('next-img');

    function updateImage() {
        carouselImage.src = images[currentIndex];
        carouselImage.alt = `Cape Town Scene ${currentIndex + 1}`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }

    function previousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    }

    nextButton.addEventListener('click', () => {
        try {
            nextImage();
        } catch (error) {
            console.error('Error: ', error);
        }
    });

    previousButton.addEventListener('click', () => {
        try {
            previousImage();
        } catch (error) {
            console.error('Error: ', error);
        }
    });

    
    updateImage();
});

