burger = document.querySelector('.burger')
rightNav = document.querySelector('.rightNav')
navbar = document.querySelector('.navbar')

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');
})

// toggle = document.querySelectorAll('.toggle')
// toggleItems = document.querySelector('.toggleItems')
// footerItems = document.querySelector('.footerItems')

// toggle.addEventListener('click',()=>{
//     toggleItems.classList.toggle('v-class-resp');
//     footerItems.classList.toggle('h1-class-resp');
// })