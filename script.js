const container = document.querySelector('.container')
const menuIcon = document.querySelector('.menu-icon')
const headingRight = document.querySelector('.main-heading-right')
const headingLeft = document.querySelector('.main-heading-left')

menuIcon.addEventListener('click', () => {
    container.classList.toggle('navigate')
})