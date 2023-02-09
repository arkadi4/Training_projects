import {pets} from "./petsAll.js"

console.log(pets[0].name)



const pickPet = () => {
    return pets[Math.floor(Math.random() * 7.99)]
}
let currentPetsInSlider = []
const pickCurrentPets = () => {
    currentPetsInSlider = []
    let currentPet1 = pickPet();

    let currentPet2 = pickPet();
    while (currentPet2 === currentPet1) {currentPet2 = pickPet()}

    let currentPet3 = pickPet();
    while (currentPet3 === currentPet1 || currentPet3 === currentPet2) {currentPet3 = pickPet()}

    currentPetsInSlider.push(currentPet1, currentPet2, currentPet3)
    //return currentPetsInSlider
}
pickCurrentPets()
console.log(currentPetsInSlider)
let nextPetsInSlider = []
const pickNextPets = (currentPetsInSlider) => {
    nextPetsInSlider = []
    let nextPet1 = pickPet()
    while (nextPet1 === currentPetsInSlider[0] || nextPet1 === currentPetsInSlider[1] ||
         nextPet1 === currentPetsInSlider[2]) {nextPet1 = pickPet()}
    
    let nextPet2 = pickPet()
    while (nextPet2 === currentPetsInSlider[0] || nextPet2 === currentPetsInSlider[1] ||
         nextPet2 === currentPetsInSlider[2] || nextPet2 === nextPet1) {nextPet2 = pickPet()}
    
    let nextPet3 = pickPet()
    while (nextPet3 === currentPetsInSlider[0] || nextPet3 === currentPetsInSlider[1] ||
         nextPet3 === currentPetsInSlider[2] || nextPet3 === nextPet1 || nextPet3 === nextPet2) {nextPet3 = pickPet()}
    
    nextPetsInSlider.push(nextPet1, nextPet2, nextPet3)
    //return nextPetsInSlider
}
pickNextPets(currentPetsInSlider)
//console.log(currentPetsInSlider[1])
// console.log('currentPet1', currentPet1)
// console.log('currentPet2', currentPet2)
// console.log('currentPet3', currentPet3)


// console.log('nextPet1', nextPet1)
// console.log('nextPet2', nextPet2)
// console.log('nextPet3', nextPet3)

//console.log('nextPet3', currentPet1)
let sliderCards = document.querySelectorAll('.slider__card')
//let sliderCard1 = document.querySelector('.slider__card__1')
// sliderCard1.children[0].src = currentPet1.img
// sliderCard1.children[1].innerHTML = currentPet1.name

//console.log('slider__card__1', sliderCard1.children[2])
//console.log('slider__cards', sliderCards)

// sliderCards.forEach(element => {
//     element.children[0] = 
// })

for (let i=0; i<sliderCards.length;i++) {
    sliderCards[i].children[0].src = currentPetsInSlider[i].img
    sliderCards[i].children[1].innerHTML = currentPetsInSlider[i].name
}

const leftSliderButton = document.querySelector('.slider__button__left')
const rightSliderButton = document.querySelector('.slider__button__right')

leftSliderButton.addEventListener('click', () => {
    pickNextPets(currentPetsInSlider)
    currentPetsInSlider = nextPetsInSlider
    //console.log(currentPetsInSlider)
    for (let i=0; i<sliderCards.length;i++) {
        sliderCards[i].children[0].src = currentPetsInSlider[i].img
        sliderCards[i].children[1].innerHTML = currentPetsInSlider[i].name
    }
})
rightSliderButton.addEventListener('click', () => {
    pickNextPets(currentPetsInSlider)
    currentPetsInSlider = nextPetsInSlider
    //console.log(currentPetsInSlider)
    for (let i=0; i<sliderCards.length;i++) {
        sliderCards[i].children[0].src = currentPetsInSlider[i].img
        sliderCards[i].children[1].innerHTML = currentPetsInSlider[i].name
    }
})


const leftSliderButtonMobile = document.querySelector('.slider__button__left__mobile')
const rightSliderButtonMobile = document.querySelector('.slider__button__right__mobile')

leftSliderButtonMobile.addEventListener('click', () => {
    pickNextPets(currentPetsInSlider)
    currentPetsInSlider = nextPetsInSlider
    //console.log(currentPetsInSlider)
    for (let i=0; i<sliderCards.length;i++) {
        sliderCards[i].children[0].src = currentPetsInSlider[i].img
        sliderCards[i].children[1].innerHTML = currentPetsInSlider[i].name
    }
})
rightSliderButtonMobile.addEventListener('click', () => {
    pickNextPets(currentPetsInSlider)
    currentPetsInSlider = nextPetsInSlider
    //console.log(currentPetsInSlider)
    for (let i=0; i<sliderCards.length;i++) {
        sliderCards[i].children[0].src = currentPetsInSlider[i].img
        sliderCards[i].children[1].innerHTML = currentPetsInSlider[i].name
    }
})

sliderCards.forEach( card => {
    card.addEventListener('click', (event) => {
        console.log(event.target.closest('.slider__card'))
        document.querySelector('.background-dark').classList.add('background-dark_popup')
        document.body.classList.toggle('burger_active')
        document.querySelector('.modal-window').classList.add('modal-window_active')

        //document.querySelector('.modal__image').src = event.target.closest('.slider__card').children[0].src
        //document.querySelector('.modal__title').textContent = event.target.closest('.slider__card').children[1].innerHTML
        console.log(event.target.closest('.slider__card'))
        if (event.target.closest('.slider__card').classList.contains(`slider__card__1`)) {
            document.querySelector('.modal__image').src = currentPetsInSlider[0].img
            document.querySelector('.modal__title').textContent = currentPetsInSlider[0].name
            document.querySelector('.modal__breed').textContent = currentPetsInSlider[0].type + ' - ' + currentPetsInSlider[0].breed
            document.querySelector('.modal__text').textContent = currentPetsInSlider[0].description
            document.querySelector('.age').textContent =  'Age: ' + currentPetsInSlider[0].age
            document.querySelector('.inoculations').textContent = 'Inoculations: ' + currentPetsInSlider[0].inoculations
            document.querySelector('.diseases').textContent = 'Diseases: ' + currentPetsInSlider[0].diseases
            document.querySelector('.parasites').textContent = 'Parasites: ' + currentPetsInSlider[0].parasites
        }
        if (event.target.closest('.slider__card').classList.contains(`slider__card__2`)) {
            document.querySelector('.modal__image').src = currentPetsInSlider[1].img
            document.querySelector('.modal__title').textContent = currentPetsInSlider[1].name
            document.querySelector('.modal__breed').textContent = currentPetsInSlider[1].type + ' - ' + currentPetsInSlider[0].breed
            document.querySelector('.modal__text').textContent = currentPetsInSlider[1].description
            document.querySelector('.age').textContent =  'Age: ' + currentPetsInSlider[1].age
            document.querySelector('.inoculations').textContent = 'Inoculations: ' + currentPetsInSlider[1].inoculations
            document.querySelector('.diseases').textContent = 'Diseases: ' + currentPetsInSlider[1].diseases
            document.querySelector('.parasites').textContent = 'Parasites: ' + currentPetsInSlider[1].parasites
        }
        if (event.target.closest('.slider__card').classList.contains(`slider__card__3`)) {
            document.querySelector('.modal__image').src = currentPetsInSlider[2].img
            document.querySelector('.modal__title').textContent = currentPetsInSlider[2].name
            document.querySelector('.modal__breed').textContent = currentPetsInSlider[2].type + ' - ' + currentPetsInSlider[0].breed
            document.querySelector('.modal__text').textContent = currentPetsInSlider[2].description
            document.querySelector('.age').textContent =  'Age: ' + currentPetsInSlider[2].age
            document.querySelector('.inoculations').textContent = 'Inoculations: ' + currentPetsInSlider[2].inoculations
            document.querySelector('.diseases').textContent = 'Diseases: ' + currentPetsInSlider[2].diseases
            document.querySelector('.parasites').textContent = 'Parasites: ' + currentPetsInSlider[2].parasites
        }
    })
})

let backgroundDark = document.querySelector('.background-dark')

backgroundDark.addEventListener('click', () => {
    document.querySelector('.background-dark').classList.remove('background-dark_popup')
    document.body.classList.toggle('burger_active')
    document.querySelector('.modal-window').classList.remove('modal-window_active')
})
document.querySelector('.div-for-modal__button').addEventListener('click', () => {
    document.querySelector('.background-dark').classList.remove('background-dark_popup')
    document.body.classList.toggle('burger_active')
    document.querySelector('.modal-window').classList.remove('modal-window_active')
})

// document.querySelector('.modal-window').addEventListener('click', () => {
//     if (event.target.classList.c)
//     document.querySelector('.background-dark').classList.remove('background-dark_popup')
//     document.body.classList.toggle('burger_active')
//     document.querySelector('.modal-window').classList.remove('modal-window_active')
// })

backgroundDark.addEventListener('mouseover', () => {
    document.querySelector('.close-button').classList.add('close-button_active')
    document.querySelector('.background-dark').classList.add('background-dark_popup_active')
})

document.querySelector('.div-for-modal__button').addEventListener('mouseover', () => {
    document.querySelector('.close-button').classList.add('close-button_active')
    document.querySelector('.background-dark').classList.add('background-dark_popup_active')
})


document.querySelector('.modal__container').addEventListener('mouseover', () => {
    document.querySelector('.close-button').classList.remove('close-button_active')
    document.querySelector('.background-dark').classList.remove('background-dark_popup_active')
    // document.body.classList.toggle('burger_active')
    // document.querySelector('.modal-window').classList.remove('modal-window_active')
})