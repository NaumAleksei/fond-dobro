// Мобильное меню
const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// Увеличение фото из галереи (работает, когда вместо заглушек вставлены <img>)
const box = document.getElementById('lightbox');
const boxImg = box.querySelector('img');
document.querySelector('.gallery').addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    boxImg.src = e.target.src;
    boxImg.alt = e.target.alt;
    box.showModal();
  }
});
box.addEventListener('click', () => box.close());

// Год в подвале
document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  const cookiePopup = document.getElementById('cookiePopup');
  const cookieAcceptBtn = document.getElementById('cookieAccept');

  if (cookiePopup && cookieAcceptBtn) {
    // Проверяем, соглашался ли пользователь ранее
    if (!localStorage.getItem('cookieAccepted')) {
      cookiePopup.classList.remove('hidden');
    } else {
      cookiePopup.classList.add('hidden');
    }

    // Обработчик клика по кнопке «Принять»
    cookieAcceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookieAccepted', 'true');
      cookiePopup.classList.add('hidden');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const copyButtons = document.querySelectorAll('.js-copy-email');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const email = btn.dataset.email || 'volgograd@russcpa.ru';

      try {
        await navigator.clipboard.writeText(email);
        btn.classList.add('copied');

        setTimeout(() => {
          btn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        window.location.href = `mailto:${email}`;
      }
    });
  });
});