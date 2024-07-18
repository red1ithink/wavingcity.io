//Header
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var links = header.querySelectorAll('a');
    var logo = document.getElementById('header-logo');

    var scrollPosition = window.scrollY;

    if (scrollPosition < 10) {
        header.style.borderBottom = '1px solid rgba(243, 243, 243, 1)';
        header.style.backgroundColor = 'rgba(153, 153, 153, 0)';
        links.forEach(function(link) {
            link.style.color = 'rgba(243, 243, 243, 1)';
        });
        // Change the image source when the scroll position is less than 10
        logo.src = 'img/white_logo.png';
    } else {
        header.style.display = 'block';
        header.style.backgroundColor = 'rgba(243, 243, 243, 1)';
        header.style.borderBottom = '1px solid rgba(243, 243, 243, 1)';
        links.forEach(function(link) {
            link.style.color = 'rgba(0, 0, 0, 1)';
        });
        // Change the image source when the scroll position is greater than or equal to 10
        logo.src = 'img/logo.PNG';
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



// 요소가 뷰포트에 들어올 때 클래스를 추가하는 함수
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function onVisibilityChange(el, callback) {
    let oldVisible;
    return function () {
      const visible = isElementInViewport(el);
      if (visible !== oldVisible) {
        oldVisible = visible;
        if (typeof callback === 'function') {
          callback();
        }
      }
    };
  }
  
  const memberElements = document.querySelectorAll('.member_h');
  const hoverTexts = [
    "PRODUCER", 
    "DIRECTOR", 
    "DESIGNER", 
    "DESIGNER"
  ];
  
  memberElements.forEach((el, index) => {
    const p = el.querySelector('p');
    const originalText = p.textContent;
  
    // 이벤트 리스너를 추가하여 hover 시 텍스트 변경
    el.addEventListener('mouseenter', () => {
      p.textContent = hoverTexts[index];
    });
  
    el.addEventListener('mouseleave', () => {
      p.textContent = originalText;
    });
  
    const handler = onVisibilityChange(el, function () {
      if (isElementInViewport(el)) {
        el.classList.add('in-view');
      } else {
        el.classList.remove('in-view');
      }
    });
  
    // 초기 실행
    handler();
    // 스크롤 이벤트에 핸들러 추가
    window.addEventListener('scroll', handler);
  });