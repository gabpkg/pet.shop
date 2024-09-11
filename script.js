/* Scripts para index.html */
function moveCarousel(direction) {
    let currentIndex = 0;

    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}

/* Scripts para create-account.html */
function showFirstPassword() {
    const inputFirstPassword = document.getElementById('firstPassword');
    const buttonShowPassword = document.getElementById('btnShowFirstPassword');
    if (inputFirstPassword.type === 'password') {
        inputFirstPassword.type = 'text';
        buttonShowPassword.classList.replace('ph-eye-closed', 'ph-eye');
    }
    else {
        inputFirstPassword.type = 'password';
        buttonShowPassword.classList.replace('ph-eye', 'ph-eye-closed');
    }
}
function showSecondPassword() {
    const inputSecondPassword = document.getElementById('secondPassword');
    const buttonShowPassword = document.getElementById('btnShowSecondPassword');
    if (inputSecondPassword.type === 'password') {
        inputSecondPassword.type = 'text';
        buttonShowPassword.classList.replace('ph-eye-closed', 'ph-eye');
    }
    else {
        inputSecondPassword.type = 'password';
        buttonShowPassword.classList.replace('ph-eye', 'ph-eye-closed');
    }
}

/* Scripts para conclusion.html */
const imageData = [
    {src: './assets/product-offer-img1.svg'},
    {src: './assets/product-offer-img2.svg'},
    {src: './assets/product-offer-img3.svg'},
    {src: './assets/product-offer-img4.svg'},
];

function createImageElements() {
    const imageGallery = document.getElementById('imageGallery');

    imageData.forEach(image => {
        const imageItem = document.createElement('div');
        imageItem.classList.add('image-item');

        const img = document.createElement('img');
        img.src = image.src
        img.addEventListener('click', () => selectImage(img));

        imageItem.appendChild(img);
        imageGallery.appendChild(imageItem);
    });
}

function selectImage(image) {
    const selectedImage = document.getElementById('selectedImage');
    if (selectedImage.src === image.src) {
        image.classList.add('selected-image')
    }

    selectedImage.src = image.src;
    const imageItems = document.querySelectorAll('.image-item img');
    imageItems.forEach(img => img.classList.remove('selected-image'));

    image.classList.add('selected-image')
}

window.onload = createImageElements, selectImage;

function addNumber() {
    const inputQuantity = document.getElementById('quantity');
    inputQuantity.value = Number(inputQuantity.value) + 1;
}
function subtractNumber() {
    const inputQuantity = document.getElementById('quantity');
    if (inputQuantity.value > 0){
        inputQuantity.value = Number(inputQuantity.value) - 1;
    }
    else {
        inputQuantity.value = Number(inputQuantity.value) - 0;
    }

}