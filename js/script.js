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
