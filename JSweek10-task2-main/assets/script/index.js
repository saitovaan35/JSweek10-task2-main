// function showMessage() {
//     console.log('Я учу JavaScript!');
// }
// showMessage();


const image = document.getElementById('image1');
// document.getElementById('image1') finds the <img> element in the HTML that has id="image1".
// const image = ... stores this element in a variable named image, so we can change its src (source) later.

const images = [ 
    "./images/27359879e469d34001c4b7b2e76e8081.jpg",
    "./images/png/6b77802adcee63c470a11104a627a6ee.jpg",
    "./images/png/3badc7a4eb34e7bcf09d24416660c346.jpg"    
];
// так как у меня всего две кнопки, то я не меняла функции, а просто добавила третью картинку в массив images

// We create an array called images that holds two image file paths.
// The first image (images[0]) is "./images/27359879e469d34001c4b7b2e76e8081.jpg".
// The second image (images[1]) is "./images/png/6b77802adcee63c470a11104a627a6ee.jpg".
// This allows us to cycle between these images when clicking the buttons.


let currentIndex = 0;
// This variable keeps track of which image is currently displayed.
// It starts at 0, meaning the first image (images[0]) is shown initially.

function changeImage() {

    currentIndex = (currentIndex - 1 + images.length) % images.length;
    // This line moves the index backward (to the previous image).
    // (currentIndex - 1) decreases the index.
    // + images.length ensures the value doesn't become negative (prevents errors).
    // % images.length makes the index wrap around (loops back when reaching the first image).

    image.src = images[currentIndex];
//     Changing the Image
// image.src = images[currentIndex];
// Sets the <img> element’s src to the new image.

    console.log("Previous button clicked");
}
// Prints a message in the browser’s console, so you can see that the function is running.

function changeImageBack() {
    currentIndex = (currentIndex + 1) % images.length;
    // Updating currentIndex
    // currentIndex = (currentIndex + 1) % images.length;
    // (currentIndex + 1) increases the index.
    // % images.length ensures it wraps around to 0 when reaching the last image.

    image.src = images[currentIndex];
    // Updates the image source so the next image appears.

    console.log("Next button clicked");
}
// Prints "Next button clicked" in the browser console.

