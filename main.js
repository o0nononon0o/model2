'use strict';
{
  let num = 1;

  setInterval(() => {
    document.querySelector(`#pic${num}`).classList.remove('slide');
    if (num === 3) {
      num = 1;
    } else {
      num++;
    }
    document.querySelector(`#pic${num}`).classList.add('slide');
  }, 4000);

  const secElements = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    secElements.forEach(secElement => {
      if (secElement.getBoundingClientRect().top < window.innerHeight * 0.6) {
        secElement.classList.add('fadein');
      }
    })
  });

  const form = document.querySelector('form');
  const btn = document.querySelector('.btn');

  form.addEventListener('input', update);
  form.addEventListener('change', update);

  function update() {
    const isRequired = form.checkValidity();
    if (isRequired) {
      btn.disabled = false;
      btn.style.opacity = 1;
      btn.style.cursor = "pointer";
      return;
    } else {
      btn.disabled = true;
      btn.style.opacity = .2;
      btn.style.cursor = "not-allowed";
    }
  }

}
