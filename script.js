//Header
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var links = header.querySelectorAll('a');

    var scrollPosition = window.scrollY;

    if (scrollPosition < 10) {
        header.style.borderBottom = '1px solid rgba(243, 243, 243, 1)';
        header.style.backgroundColor = 'rgba(153, 153, 153, 0)';
        links.forEach(function(link) {
            link.style.color = 'rgba(243, 243, 243, 1)';
        });
    } else {
        header.style.display = 'block';
        header.style.backgroundColor = 'rgba(243, 243, 243, 1)';
        header.style.borderBottom = '1px solid rgba(243, 243, 243, 1)';
        links.forEach(function(link) {
            link.style.color = 'rgba(0, 0, 0, 1)';
        });
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

    // 첫 페이지 로드 시 자동 재생 시도 (최신 브라우저 정책에 의해 무시될 수 있음)
    audio.play().catch(function(error) {
        console.log("Autoplay failed, user interaction needed.");
    });

    toggleBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            toggleBtn.setAttribute('src', 'img/wave-sound.png'); // 아이콘을 '음악 켜짐' 상태로 변경
        } else {
            audio.pause();
            toggleBtn.setAttribute('src', 'img/wave-sound.png'); // 아이콘을 '음악 꺼짐' 상태로 변경
        }
    });
});



