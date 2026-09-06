document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. GALERIA / LIGHTBOX
  // ==========================================
  const lightbox = document.getElementById('lightbox');

  // Wykonaj kod galerii TYLKO jeśli lightbox istnieje na danej podstronie
  if (lightbox) {
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const photosList = document.querySelector('.photos-list');

    const items = Array.from(document.querySelectorAll('.photos-list li'));
    let currentIndex = 0;

    // Funkcja pomocnicza do zamykania
    const closeLightbox = () => lightbox.classList.remove('active');

    // Wyświetlanie zdjęcia (Uproszczona pętla indeksów)
    function showImage(index) {
      if (items.length === 0) return;

      // Matematyczna obsługa zapętlenia (modulo)
      currentIndex = (index + items.length) % items.length;

      const currentItem = items[currentIndex];
      const img = currentItem.querySelector('.grid-photo');
      const caption = currentItem.querySelector('.photo-caption');

      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || '';
      }

      if (lightboxCaption) {
        lightboxCaption.innerHTML = caption ? caption.innerHTML : '';
      }
    }

    // DELEGACJA ZDARZEŃ: Jeden listener dla całej galerii zamiast pętli po każdym li
    if (photosList) {
      photosList.addEventListener('click', (e) => {
        const item = e.target.closest('li');
        if (!item) return;

        const index = items.indexOf(item);
        if (index !== -1) {
          showImage(index);
          lightbox.classList.add('active');
        }
      });
    }

    // Przełączanie zdjęć
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentIndex + 1);
      });
    }

    // Zamykanie
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Klawiatura
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;

      if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
      else if (e.key === 'ArrowRight') showImage(currentIndex + 1);
      else if (e.key === 'Escape') closeLightbox();
    });
  }


  // ==========================================
  // ODSŁANIANIE NUMERU TELEFONU
  // ==========================================
  const phoneBtn = document.getElementById('show-phone-btn');
  const phoneDisplay = document.getElementById('phone-display');

  if (phoneBtn && phoneDisplay) {
    phoneBtn.addEventListener('click', function () {
      // Rozbite wartości utrudniają odczytanie numeru z samego pliku script.js
      const parts = ["+48", " 512", " 019", " 925"];
      const fullNumber = parts.join('');
      const rawNumber = fullNumber.replace(/\s+/g, '');

      phoneDisplay.innerHTML = `<a href="tel:${rawNumber}">${fullNumber}</a>`;
      this.style.display = 'none';
    });
  }

});