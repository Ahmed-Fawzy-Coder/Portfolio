  window.addEventListener('scroll', function () {
    var header = document.getElementById('navbar');
    if (window.scrollY >= 70) {
      header.classList.add("navbar-shadow")
    } else {
      header.classList.remove("navbar-shadow")
    }
  })