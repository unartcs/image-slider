const imgArray = ['dog.jpg', 'pumpkin.jpg', 'red-flowers.jpg', 'yellow-flowers.jpg']
const imageContainer = document.querySelector('.image-container > img')
const nextPictureButton = document.querySelector('.next-arrow')
const previousPictureButton = document.querySelector('.previous-arrow')
let imageNumber = 0;
let canClick = true;

function changeImage(direction) {
    switch (direction) {
        case 'next':
            imageContainer.classList.add('animateright')
            break
        case 'prev':
            imageContainer.classList.add('animateleft')
            break
    }
    canClick = false
    setTimeout(() => {
        canClick = true
        imageContainer.setAttribute('src', './imgs/' + imgArray[imageNumber])
        imageContainer.setAttribute('alt', imgArray[imageNumber])
        imageContainer.classList.remove('animateright')
        imageContainer.classList.remove('animateleft')
    }, 200)
}

nextPictureButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (canClick === true) {
        if (imageNumber >= imgArray.length - 1) {
            imageNumber = 0;
        } else {
            imageNumber++
        }
        changeImage('next')
    }
})

previousPictureButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (canClick === true) {
        if (imageNumber <= 0) {
            imageNumber = imgArray.length - 1;
        } else {
            imageNumber--
        }
        changeImage('prev')
    }
})