window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    var scrollY = window.scrollY || window.pageYOffset;
  
    if (scrollY > 1) {
      scrollToTopButton.style.opacity = 1;
    } else {
      scrollToTopButton.style.opacity = 0;
    }
  });
  

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }

