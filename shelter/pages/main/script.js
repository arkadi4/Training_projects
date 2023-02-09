import {pets} from "./petsAll.js"

// console.log(pets[3])

let navLinks = document.querySelectorAll('.nav-link')
let navItems = document.querySelectorAll('.nav-item')
let navList = document.querySelector('.nav-list')
let navListResponsiveActive = document.querySelector('.nav-list_responsive_active')
let logo = document.querySelector('.logo')
let navLinkActive = document.querySelector('.nav-link_active')
let contentButton = document.querySelector('.content__button')
let petsButton = document.querySelector('.pets__button')
let slider = document.querySelector('.slider')
let sliderCards = document.querySelectorAll('.slider__card')
let sliderCardButtons = document.querySelectorAll('.slider__card__button')
const startScreenBackground = document.querySelector('.start-screen-background')
const defaultLink = document.querySelector('.default-link')

let burgerIcon = document.querySelector('.burger__container')
const navListResponsive = document.querySelector('.nav-list_responsive')


burgerIcon.addEventListener('click', () => { 
    navList.classList.toggle('nav-list_responsive_active')
    logo.classList.toggle('logo_active')
    burgerIcon.classList.toggle('burger__container_active')
    document.querySelector('.background-dark').classList.toggle('background-dark_active')
    document.querySelector('.start-screen').classList.toggle('start-screen_active')
    navLinks.forEach(element => element.classList.toggle('nav-link_active'))
    document.body.classList.toggle('burger_active')
})

// navListResponsive.addEventListener('click', (event) => {
//     console.log(event.target)
//     if (event.target.classList.contains('nav-link_active')) {
//         navList.classList.toggle('nav-list_responsive_active')
//         logo.classList.toggle('logo_active')
//         burgerIcon.classList.toggle('burger__container_active')
//         document.querySelector('.background-dark').classList.toggle('background-dark_active')
//         document.querySelector('.start-screen').classList.toggle('start-screen_active')
//         navLinks.forEach(element => element.classList.toggle('nav-link_active'))
//         document.body.classList.toggle('burger_active')
//     }
//     console.log('click')
// })

document.addEventListener('click', (event) => {
    //console.log(event.target)
    if (event.target.classList.contains('background-dark_active') || event.target.classList.contains('nav-link_active') ) {
        console.log('YPA')
        navList.classList.toggle('nav-list_responsive_active')
        logo.classList.toggle('logo_active')
        burgerIcon.classList.toggle('burger__container_active')
        document.querySelector('.background-dark').classList.toggle('background-dark_active')
        document.querySelector('.start-screen').classList.toggle('start-screen_active')
        navLinks.forEach(element => element.classList.toggle('nav-link_active'))
        document.body.classList.remove('burger_active')
    }
})


navList.addEventListener('mouseover', (event) => {
        navItems.forEach(element => element.classList.remove('nav-item_selected'));
        navLinks.forEach(element => element.classList.remove('nav-link_selected'));
        if (event.target.classList.contains('nav-link')) {
            event.target.classList.add('nav-link_selected');
        }
})

navList.addEventListener('mouseleave', () => defaultLink.classList.add('nav-link_selected'))

contentButton.addEventListener('click', () => document.location='#pets')
petsButton.addEventListener('click', () => document.location='./../pets/index.html')

slider.addEventListener('mouseover', (event) => {
    sliderCards.forEach(element => element.classList.remove('slider__card_active'));
    sliderCardButtons.forEach(element => element.classList.remove('slider__card__button_active'));
    // console.log(event.target.closest('.slider__card'))
    // if (event.target.closest('.slider__card')) {
    //     alert("yyyyyyyyyyyyy")
    // }

    //event.target.closest('.slider__card').classList.add('slider__card_active');
     if (event.target.closest('.slider__card')) {
        //  console.log(event.target.closest('.slider__card'))
         event.target.closest('.slider__card').classList.add('slider__card_active');
     }
    if (event.currentTarget.classList.contains('slider__card__button')) {
        event.currentTarget.classList.add('slider__card__button_active');
    } 
})

