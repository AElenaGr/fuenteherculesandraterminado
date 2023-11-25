// Agrega la clase "active" al enlace correspondiente a la página actual
document.addEventListener('DOMContentLoaded', function() {
    var currentLocation = window.location.pathname;
    var links = document.querySelectorAll('.tab');
  
    links.forEach(function(link) {
      if (link.getAttribute('href') === currentLocation) {
        link.classList.add('active');
      }
    });
  });
  

  function toggleMenu() {
    var menu = document.querySelector('.tabs');
    menu.classList.toggle('menu');
  }
  