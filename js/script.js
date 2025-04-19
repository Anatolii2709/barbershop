const burger = document.getElementById('burger-btn');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});

const langButtons = document.querySelectorAll('.lang-btn');

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

const container = document.querySelector('.news-scroll-container');
const dots = document.querySelectorAll('.dot');

container.addEventListener('scroll', () => {
  const scrollLeft = container.scrollLeft;
  const cardWidth = container.offsetWidth;

  const index = Math.round(scrollLeft / cardWidth);

  dots.forEach(dot => dot.classList.remove('activ'));
  if (dots[index]) {
    dots[index].classList.add('activ');
  }
});
