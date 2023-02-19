var typed = new Typed('.element', {
    strings: ["After Successful Transition Your Acctiviton Link Will Be Updated."],
    typeSpeed: 80,
    backSpeed: 30,
    loop: true,
  });

// ! =========================================

  const link = document.querySelector('.submit');
  link.addEventListener('click',()=>{
    location.reload();
  })

//! =========================================
