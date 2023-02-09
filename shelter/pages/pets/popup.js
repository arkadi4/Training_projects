

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
})