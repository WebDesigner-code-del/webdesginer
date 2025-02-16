// show scrolll up
function scrollup() {
    const scrollup = document.getElementById('scroll-up');
    
    if (!scrollup) return;
  
    if (window.scrollY >= 300) {
      scrollup.classList.add('show__scroll');
    } else {
      scrollup.classList.remove('show__scroll');
    }
  }
  
  window.addEventListener('scroll', scrollup);

  /*=============== QUESTIONS ACCORDION ===============*/


const accordionItems = document.querySelectorAll('.questions__item');

accordionItems.forEach(item => {
    const accordionHeader = item.querySelector('.questions__header');
    const accordionContent = item.querySelector('.questions__content');

    // Set initial height to 0 and overflow to hidden for smooth transition
    accordionContent.style.height = '0';
    accordionContent.style.overflow = 'hidden';

    accordionHeader.addEventListener('click', () => {
        item.classList.toggle('accordion-open'); // Use toggle instead of if/else

        if (item.classList.contains('accordion-open')) {
            accordionContent.style.height = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.height = '0';
        }
    });
});

// swiperr


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

