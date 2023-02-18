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
const close = document.querySelectorAll('.services__model-close');
const partner = document.querySelectorAll('.partner_info');


// const model = (alertClick) =>{
//   alertBox[alertClick].classList.add('active');
// }

// modelBtn.forEach((mb, i)=>{
//   mb.addEventListener('click', () =>{
//       model(i);
//   });
// });

close.forEach((i)=>{
  i.addEventListener('click', () =>{
    alertBox.forEach((mv)=>{
          mv.classList.remove('active');
      });
  }); 
});

// ! =================================================================


