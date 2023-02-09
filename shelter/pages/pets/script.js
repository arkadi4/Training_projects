const logo = document.querySelector('.logo')

logo.addEventListener('click', () => document.location='./../main/index.html')

const defaultLink = document.querySelector('.default-link')



let navLinks = document.querySelectorAll('.nav-link')
let navItems = document.querySelectorAll('.nav-item')
let navList = document.querySelector('.nav-list')
let navListResponsiveActive = document.querySelector('.nav-list_responsive_active')
let navLinkActive = document.querySelector('.nav-link_active')
let contentButton = document.querySelector('.content__button')
let petsButton = document.querySelector('.pets__button')
let slider = document.querySelector('.slider')
let sliderCardButtons = document.querySelectorAll('.slider__card__button')
const startScreenBackground = document.querySelector('.start-screen-background')
let overlay = document.querySelector('.overlay')

let burgerIcon = document.querySelector('.burger__container')
const navListResponsive = document.querySelector('.nav-list_responsive')

navList.addEventListener('mouseover', (event) => {
         navItems.forEach(element => element.classList.remove('nav-item_selected'));
         navLinks.forEach(element => element.classList.remove('nav-link_selected'));
         if (event.target.classList.contains('nav-link')) {
            event.target.classList.add('nav-link_selected');
         }       
})

navList.addEventListener('mouseleave', () => defaultLink.classList.add('nav-link_selected'))

burgerIcon.addEventListener('click', (event) => {
    //console.log(event.target) 
    overlay.classList.toggle('overlay_active')
    navList.classList.toggle('nav-list_responsive_active')
    logo.classList.toggle('logo_active')
    burgerIcon.classList.toggle('burger__container_active')
    document.querySelector('.header').classList.toggle('header_active')
    //document.querySelector('.start-screen').classList.toggle('start-screen_active')
    navLinks.forEach(element => element.classList.toggle('nav-link_active'))
    document.body.classList.toggle('burger_active')
})

document.addEventListener('click', (event) => {
    //console.log(event.target)
    if (event.target.classList.contains('overlay') || event.target.classList.contains('nav-link_active') ) {
        
        navList.classList.remove('nav-list_responsive_active')
        logo.classList.remove('logo_active')
        burgerIcon.classList.remove('burger__container_active')
        document.querySelector('.header').classList.remove('header_active')
        navLinks.forEach(element => element.classList.remove('nav-link_active'))
        document.body.classList.remove('burger_active')
        //console.log(event.target)
        overlay.classList.remove('overlay_active')
    }
})


//////////////////////////////////////////////// PAGINATION  //////////////////////////////////////

// console.log('YYYYYYPPPPPPAAAAAAAAA', shuffle(pets))



import {pets} from "./petsAll.js"

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}
// console.log(pets[0])
// shuffle(pets)
// console.log(pets[0])

let bigPetsArray = []
let lastPage = 6
let cardsOnPageArray = []
let numberOfCardsOnPage = 48/lastPage
let pageNumber = 1
let cardsContainer = document.querySelector('.cards-container')

// for (let i=0;i<6;i++) {
//     shuffle(pets)
//     //console.log('----------------',pets.slice(2))
//     bigPetsArray.push(...pets)
// }
//console.log(bigPetsArray)

const createPetsArrayByScreenSizeCheck = () => {
    //console.log('YYYYYYPPPPPPAAAAAAAAA', (window.matchMedia("(max-width: 1000px)").matches), '\n')
    if ( (window.matchMedia("(max-width: 767px)").matches) ) {
        bigPetsArray = []
        lastPage = 16
        numberOfCardsOnPage = 48/lastPage
        for (let i=0;i<lastPage;i++) {
            shuffle(pets)
            bigPetsArray.push(...pets.slice(5))
        }
        // createCardsOnPage(bigPetsArray, 48/lastPage, 1)
        // cardsContainer.append(...cardsOnPageArray)
        // console.log('YYYYYYPPPPPPAAAAAAAAA', cardsContainer, '\n')
        return bigPetsArray
    } 
    if ( (window.matchMedia("(max-width: 1279px)").matches) ) {
        bigPetsArray = []
        lastPage = 8
        numberOfCardsOnPage = 48/lastPage
        for (let i=0;i<lastPage;i++) {
            shuffle(pets)
            pets.slice(2)
            bigPetsArray.push(...pets.slice(2))
        }
        // createCardsOnPage(bigPetsArray, 48/lastPage, 1)
        // cardsContainer.append(...cardsOnPageArray)
        // console.log('YYYYYYPPPPPPAAAAAAAAA', cardsContainer, '\n')
        return bigPetsArray
    }
    if ( (window.matchMedia("(max-width: 1800px)").matches) ) {
        bigPetsArray = []
        lastPage = 6
        numberOfCardsOnPage = 48/lastPage
        for (let i=0;i<lastPage;i++) {
            shuffle(pets)
            bigPetsArray.push(...pets)
        }
        // createCardsOnPage(bigPetsArray, 48/lastPage, 1)
        // cardsContainer.append(...cardsOnPageArray)
        // console.log('YYYYYYPPPPPPAAAAAAAAA', cardsContainer, '\n')
        return bigPetsArray
    }
}
createPetsArrayByScreenSizeCheck();
console.log('YYYYYYPPPPPPAAAAAAAAA', bigPetsArray, '\n')

const createCardsOnPage = (bigPetsArray, numberOfCardsOnPage, pageNumber) => {
    cardsOnPageArray = []
    //console.log(cardsOnPageArray)
    //cardsContainer = []
    // (...cardsOnPageArray).remove()
    // console.log('children',cardsContainer.children)
    // cardsContainer.removeChild()
    //console.log(cardsContainer)
    for (let i=(pageNumber-1)*numberOfCardsOnPage;
    i<(pageNumber-1)*numberOfCardsOnPage + numberOfCardsOnPage;i++) {
        let card = document.createElement('div')
        card.className = `card card__${i}`
        let img = document.createElement('img')
        img.src = bigPetsArray[i].img
        img.className = 'card__img'
        let title = document.createElement('h4')
        title.innerHTML = bigPetsArray[i].name
        title.className = 'card__title'
        let button = document.createElement('button')
        button.innerHTML = 'Learn more'
        button.className = 'card__button'
        card.append(img, title, button)
        cardsOnPageArray.push(card)
        let subtitle = document.createElement('h4')
        subtitle.innerHTML = bigPetsArray[i].type + ' - ' + bigPetsArray[i].breed
        subtitle.className = 'card__subtitle'
        let cardText = document.createElement('p')
        cardText.innerHTML = bigPetsArray[i].description
        cardText.className = 'card__text'
        let cardAge = document.createElement('p')
        cardAge.innerHTML = 'Age: ' + bigPetsArray[i].age
        cardAge.className = 'card__age'
        let cardInoculations = document.createElement('p')
        cardInoculations.innerHTML = 'Inoculations: ' + bigPetsArray[1].inoculations
        cardInoculations.className = 'card__Inoculations'
        let cardDiseases = document.createElement('p')
        cardDiseases.innerHTML = 'Diseases: ' + bigPetsArray[1].diseases
        cardDiseases.className = 'card__Diseases'
        let cardParasites = document.createElement('p')
        cardParasites.innerHTML = 'Parasites: ' + bigPetsArray[1].parasites
        cardParasites.className = 'card__Parasites'
        card.append(subtitle, cardText, cardAge, cardInoculations, cardDiseases, cardParasites)
        document.querySelector('.button-center').innerHTML = pageNumber
        
    }
    
    cardsContainer.append(...cardsOnPageArray)
    console.log(cardsOnPageArray)
}
createCardsOnPage(bigPetsArray, numberOfCardsOnPage, 1)

// cardsContainer.append(...cardsOnPageArray)

let firstButton = document.querySelector('.button__first')
let backButton = document.querySelector('.button__back')
let forwardButton = document.querySelector('.button__forward')
let lastButton = document.querySelector('.button__last')
let modalIsActive = false

const showPopupWindow = () => {
    document.querySelectorAll('.card').forEach( sliderCard => {
        sliderCard.addEventListener('click', (event) => {
            // console.log("event.target.closest( '.card' )", event.target.closest('.card'))
            // console.log(event.target.closest('.card').children)
            modalIsActive = true
            console.log('modalIsActive', modalIsActive)
            document.querySelector('.overlay').classList.add('overlay_active')
            document.body.classList.add('burger_active')
            document.querySelector('.modal-window').classList.add('modal-window_active')
            document.querySelector('.header').classList.add('header_active')
            let eventCard = event.target.closest('.card')
    
            document.querySelector('.modal-wrapper').classList.add('modal-wrapper_active')
            document.querySelector('.modal__container').classList.add('modal__cotainer_active')
    
            //console.log(event.target.closest('.slider__card'))
            //document.querySelector('.modal__image').classList.add('modal-window_active')
            document.querySelector('.modal__image').src = eventCard.firstChild.src
            document.querySelector('.modal__title').textContent= eventCard.children[1].textContent
            document.querySelector('.modal__breed').textContent= eventCard.children[3].textContent
            document.querySelector('.modal__text').textContent= eventCard.children[4].textContent
            document.querySelector('.age').textContent= eventCard.children[5].textContent
            document.querySelector('.inoculations').textContent= eventCard.children[6].textContent
            document.querySelector('.diseases').textContent= eventCard.children[7].textContent
            document.querySelector('.parasites').textContent= eventCard.children[8].textContent
        })
    })
} 
showPopupWindow()


const forwardButtonHandler = () => {
    pageNumber ++
    cardsContainer.innerHTML = ''
    createCardsOnPage(bigPetsArray, numberOfCardsOnPage=48/lastPage, pageNumber)
    checkActiveButtons()
    showPopupWindow()
}
forwardButton.addEventListener('click', forwardButtonHandler)

const backButtonHandler = () => {
    pageNumber --
    cardsContainer.innerHTML = ''
    createCardsOnPage(bigPetsArray, numberOfCardsOnPage=48/lastPage, pageNumber)
    checkActiveButtons()
    showPopupWindow()
}
backButton.addEventListener('click', backButtonHandler)

const firstButtonHandler = () => {
    pageNumber = 1
    cardsContainer.innerHTML = ''
    createCardsOnPage(bigPetsArray, numberOfCardsOnPage=48/lastPage, pageNumber)
    checkActiveButtons()
    showPopupWindow()
}
firstButton.addEventListener('click', firstButtonHandler)

const lastButtonHandler = () => {
    pageNumber = lastPage
    cardsContainer.innerHTML = ''
    createCardsOnPage(bigPetsArray, numberOfCardsOnPage=48/lastPage, pageNumber)
    checkActiveButtons()
    showPopupWindow()
}
lastButton.addEventListener('click', lastButtonHandler)

const checkActiveButtons = () => {
    if (pageNumber === lastPage) {
        //console.log('pageNumber')
        lastButton.classList.remove('button-color')
        forwardButton.classList.remove('button-color')
        lastButton.classList.add('button-dark')
        forwardButton.classList.add('button-dark')
        firstButton.classList.add('button-color')
        backButton.classList.add('button-color')
        firstButton.classList.remove('button-dark')
        backButton.classList.remove('button-dark')
        lastButton.removeEventListener('click', lastButtonHandler)
        forwardButton.removeEventListener('click', forwardButtonHandler)
        firstButton.addEventListener('click', lastButtonHandler)
        backButton.addEventListener('click', backButtonHandler)
    }
    if ( pageNumber >= 2 && pageNumber <= (lastPage-1) ) {
        //console.log('pageNumber')
        lastButton.classList.add('button-color')
        forwardButton.classList.add('button-color')
        lastButton.classList.remove('button-dark')
        forwardButton.classList.remove('button-dark')
        firstButton.classList.add('button-color')
        backButton.classList.add('button-color')
        firstButton.classList.remove('button-dark')
        backButton.classList.remove('button-dark')
        lastButton.addEventListener('click', lastButtonHandler)
        forwardButton.addEventListener('click', forwardButtonHandler)
        firstButton.addEventListener('click', lastButtonHandler)
        backButton.addEventListener('click', backButtonHandler)
    }
    if (pageNumber === 1) {
        //console.log('pageNumber')
        firstButton.classList.remove('button-color')
        backButton.classList.remove('button-color')
        firstButton.classList.add('button-dark')
        backButton.classList.add('button-dark')
        lastButton.classList.add('button-color')
        forwardButton.classList.add('button-color')
        lastButton.classList.remove('button-dark')
        forwardButton.classList.remove('button-dark')
        firstButton.removeEventListener('click', lastButtonHandler)
        backButton.removeEventListener('click', backButtonHandler)
        lastButton.addEventListener('click', lastButtonHandler)
        forwardButton.addEventListener('click', forwardButtonHandler)
    }
}

//console.log('pageNumberpageNumber',pageNumber)

// if (pageNumber === 6) {
//     console.log('pageNumber')
//     document.querySelector('.button__last').classList.remove('button-color')
//     document.querySelector('.button__back').classList.remove('button-color')
//     document.querySelector('.button__last').classList.add('button-dark')
//     document.querySelector('.button__back').classList.add('button-dark')
// }






//////////////////////////////  MODAL  ///////////////////////////////////////////


let sliderCards = document.querySelectorAll('.card')
let sliderCard = document.querySelector('.card')
console.log('sl',sliderCards)



//let overlay = document.querySelector('.background-dark')
//console.log("event.target.closest( '.card' )", event.target.closest('.card'))

document.addEventListener('click', (event) => {
    console.log('event.target', event.target)
    console.log("event.target.closest('.modal__container')", event.target.closest('.modal__container'))
    if (modalIsActive && !event.target.closest('.modal__cotainer_active')) {
        document.querySelector('.overlay').classList.remove('overlay_active')
        document.body.classList.remove('burger_active')
        document.querySelector('.modal-window').classList.remove('modal-window_active')
        document.querySelector('.header').classList.remove('header_active')
    
        document.querySelector('.modal-wrapper').classList.remove('modal-wrapper_active')
        modalIsActive = false
    }

})


// overlay.addEventListener('click', (event) => {
//     console.log(event.target)
//     document.querySelector('.overlay').classList.remove('overlay_active')
//     document.body.classList.remove('burger_active')
//     document.querySelector('.modal-window').classList.remove('modal-window_active')
//     document.querySelector('.header').classList.remove('header_active')

//     document.querySelector('.modal-wrapper').classList.remove('modal-wrapper_active')
// })

// document.querySelector('.div-for-modal__button').addEventListener('click', (event) => {
//     //console.log(event.target)
//     document.querySelector('.overlay').classList.remove('overlay_active')
//     document.body.classList.remove('burger_active')
//     document.querySelector('.modal-window').classList.remove('modal-window_active')
//     document.querySelector('.header').classList.remove('header_active')

//     document.querySelector('.modal-wrapper').classList.remove('modal-wrapper_active')
// })

overlay.addEventListener('mouseover', () => {
    document.querySelector('.close-button').classList.add('close-button_active')
})

document.querySelector('.div-for-modal__button').addEventListener('mouseover', () => {
    document.querySelector('.close-button').classList.add('close-button_active')
})

document.querySelector('.modal__container').addEventListener('mouseover', (event) => {
    if (event.target.closest('.modal__container').classList.contains('modal__container')) {
        
    }
    document.querySelector('.close-button').classList.remove('close-button_active')
    //console.log(event.target)
})
