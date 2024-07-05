const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;

function showSlide(n) {
  images.forEach(img => img.style.display = 'none');
  currentSlide = (n + images.length) % images.length;
  images[currentSlide].style.display = 'block';

  // 페이지 번호 업데이트
  const paginationItems = document.querySelectorAll('.pagination-item');
  paginationItems.forEach(item => item.classList.remove('active'));
  paginationItems[currentSlide].classList.add('active');
}

prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

showSlide(currentSlide);

// 페이지 번호 클릭 처리 (선택 사항)
const paginationItems = document.querySelectorAll('.pagination-item');
paginationItems.forEach((item, index) => {
  item.addEventListener('click', () => showSlide(index));
});

