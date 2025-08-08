window.addEventListener('mousemove', function(data) {
    gsap.to('.cursor',{
        x: data.clientX,
        y: data.clientY,
        scale: 2,
    })
})

let pointer = false
window.addEventListener('dblclick', () => {
    pointer = !pointer
    if(!pointer){
        gsap.to('.cursor', {
            opacity: 0,
        })
    } else{
        gsap.to('.cursor', {
            opacity: 1,
        })
    }
})

const card = document.querySelector('.logo');
const section = document.querySelector('.drop_contact');
let pointer1 = false

card.addEventListener('click', () => {
    pointer1 = true
    if(pointer1){
        event.stopPropagation(); 
        section.style.opacity = '1';
    }
});

window.addEventListener('click', () => {
    pointer1 = false
    if(!pointer1){
        section.style.opacity = '0';
    }
})

gsap.to('.menu',{
    duration:1,
    scale:4,
    x: 0,
    y: 0,
    overflow: 'hidden', 
    boxShadow: '#055 0 0 70px',

})

gsap.to('.menu', {
    duration : 15,
    rotation: 360,
    repeat: -1,
    ease: 'none',
})

gsap.from('.tl', {
    x: '-4vw',
    y: '-4vw',
    duration: 1,
    opacity: 0,
    delay: 0.5,
})

gsap.from('nav',{
    duration: 2,
    opacity: 0,
    // delay: 0.5,
    y: -100,
    textShadow: 'white 0 0 0'
})

gsap.from('.next_page',{
    opacity: 0,
    duration: 8,
    delay: 1
})

gsap.to('.next_page',{
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 2,
    boxShadow:'#055 0 0 20px',
    backgroundColor : "white"
})

gsap.to('.next_page a', {
    repeat: -1,
    yoyo: true,
    duration: 2,
    color: '#055',
})

gsap.from('.main_info a', {
    duration: 2,
    opacity: 0,
    delay: 0.5,
    y: 50,
    textShadow: 'white 0 0 0'
})

gsap.from(' #namaste', {
    delay: 1,
    duration: 3,
    y: -50,
    opacity: 0
})

gsap.from('#frontend',{
    delay:2,
    duration: 3,
    y : 50,
    opacity:0
})

gsap.from(' .main_info div p',{
    delay: 2,
    duration: 3,
    y: 50,
    opacity: 0
})


gsap.to(".bloggify",{
    y:-50,
    duration: 4,
    yoyo:true,
    repeat: -1
})

gsap.to(".Python", {
    delay:2,
    y: -20,
    duration: 2,
    yoyo: true,
    repeat: -1
})

gsap.to(".form", {
    delay: 2,
    y: -20,
    duration: 2,
    yoyo: true,
    repeat: -1
})


gsap.from('.pp img',{
    opacity: 0,
    duration: 2,
    y: 100,
})

gsap.from('#git',{
    y: 10,
    duration: 2,
    repeat: -1,
    yoyo: true,
})

gsap.from('#react', {
    y: 20,
    duration: 4,
    repeat: -1,
    yoyo: true,
    // rotation: 360,
})

gsap.to('#react', {
    repeat: -1,
    rotation: 360,
    duration: 15,
    yoyo: true
})

gsap.from('#node', {
    y: 20,
    duration: 3,
    repeat: -1,
    yoyo: true,
})

gsap.from('#css', {
    y: 10,
    duration: 2,
    repeat: -1,
    yoyo: true,
})

gsap.from('#html', {
    y: 10,
    duration: 5,
    repeat: -1,
    yoyo: true,
})

gsap.from('#js', {
    y: 10,
    duration: 5,
    repeat: -1,
    yoyo: true,
})

gsap.from('.first',{
    y: -10,
    duration: 3,
    repeat: -1,
    yoyo:true,
})

gsap.to('.first', {
    y: 20,
    duration: 3,
    repeat: -1,
    yoyo: true
})