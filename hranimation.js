document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    let position = 50;  // Start with the gradient at 50%
  
    const animatedElements = document.querySelectorAll('.tables, .vp');
  
    // Set the initial background position for all .tables and .vp classifications to 50%
    animatedElements.forEach(el => {
      el.style.backgroundPosition = `${position}% 50%`;
      el.style.transition = 'background-position 0.2s ease-out';  // Smooth transition
    });
  
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      const position = (scrollTop % 1000) / 7;

      animatedElements.forEach(el => {
        el.style.backgroundPosition = `${position}% 50%`;
      });
  
  });

});