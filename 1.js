function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
const img = document.getElementsByClassName("img");

function scale() {
    let x = getRandomInt(img.length);
    img[x].classList.add("imgAnimation");
    setTimeout(() => {
        img[x].classList.remove("imgAnimation");
    }, 1000);
}
setInterval(scale, 2000);

var nav = document.getElementById('navbar');
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    nav.classList.add('navbar1');
} else {
    nav.classList.remove('navbar1');
}

const slider = document.querySelector('.list-logo');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
});
slider.addEventListener('mouseup', () => {
    isDown = false;
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX); //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});