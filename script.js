//Header
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');

    
    var scrollPosition = window.scrollY;

    
    if (scrollPosition < 10) {
        header.style.borderBottom = '1px solid rgba(0, 0, 0, 0)';
        header.style.backgroundColor = 'rgba(153, 153, 153, 0)';
    } else {
        header.style.display = 'block';
        header.style.backgroundColor = 'rgba(243,243,243 ,1)';
        header.style.borderBottom = 'rgba(243,243,243 ,1)';
    }
});


//title animation
let observer = new IntersectionObserver((e)=>{
    e.forEach((a)=>{
        if (a.isIntersecting){
            a.target.style.opacity = 1;
            a.target.style.left = 108;
        }
    })

});


let p = document.querySelectorAll('p')
observer.observe(p[0]) //html 요소 감시
observer.observe(p[1])
observer.observe(p[2])
observer.observe(p[3])
observer.observe(p[4])

//music controller
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    var toggleBtn = document.getElementById('music-toggle');

    toggleBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            toggleBtn.textContent = 'Music Off';
        } else {
            audio.pause();
            toggleBtn.textContent = 'Music On';
        }
    });
});



