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
const alertBox = document.querySelector('.payment__alert');
const parTner = document.querySelectorAll('.partner_info');
const close = document.querySelectorAll('.services__model-close');

let model = function(alert){
  alertBox[alert].classList.add('active');
}

parTner.forEach((pt, i)=>{
  pt.addEventListener('click', () =>{
      model(i);
  });
});


close.forEach((i)=>{
  i.addEventListener('click', () =>{
    alertBox.forEach((i)=>{
          i.style.display = 'none';
      });
  }); 
});






// ! =================================================================


