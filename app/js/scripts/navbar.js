function init() {
  window.addEventListener('scroll', function(e){
    let distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 300,
      header = document.querySelector('header');
    if (distanceY > shrinkOn) {
      document.getElementByTagName('header').setAttribute('class', 'smaller');
    } else {
      if (document.getElementByTagName('header').hasAttribute('smaller')) {
        document.getElementByTagName('header').setAttribute('class', '');
      }
    }
  });
}

window.onload = init();
