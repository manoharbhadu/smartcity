$('#owl-carousel_1').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
      dots: false
    },
    600: {
      items: 1,
      dots: false
    },
    1000: {
      items: 1
    }
  }
})

$('#owl-carousel_2').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
})

$('#owl-carousel_3').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})

$('.qustion').click(function () {
  $(this)
    .parent()
    .siblings()
    .find('.ans')
    .slideUp()
  $(this)
    .siblings()
    .slideToggle()
  $(this)
    .parent()
    .siblings()
    .children()
    .find('.sp1')
    .show()
  $(this)
    .parent()
    .siblings()
    .children()
    .find('.sp2')
    .hide()
  $(this)
    .find('span')
    .toggle()
})
