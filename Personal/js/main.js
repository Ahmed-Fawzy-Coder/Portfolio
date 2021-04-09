  window.addEventListener('scroll', function () {
    var header = document.getElementById('navbar');
    if (window.scrollY >= 70) {
      header.classList.add("navbar-shadow")
    } else {
      header.classList.remove("navbar-shadow")
    }
  })
  var links = document.querySelectorAll('#projects ul li')
  links.forEach(li => {
    var projects = document.querySelectorAll('.project-cards > div')
    li.addEventListener('click', function (e) {
      var id = e.target.id;
      links.forEach(x => {
        if (x.id != id) {
          x.classList.remove('active')
        } else {
          x.classList.add('active')
        }
      })
      if (id == "all") {
        projects.forEach(project => {
          project.classList.remove('hidden')
        })
        document.getElementById('errorHandler').classList.add('hidden')
      } else {
        if (document.querySelectorAll(`.${id}`).length == 0) {
          projects.forEach(project => {
            project.classList.add('hidden')
          })
          document.getElementById('errorHandler').classList.remove('hidden')
          return
        }
        projects.forEach(project => {
          if (!project.classList.contains(id)) {
            project.classList.add('hidden')
          } else {
            project.classList.remove('hidden')
          }
          document.getElementById('errorHandler').classList.add('hidden')
        })
      }
    })
  })