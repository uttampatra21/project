// var typed = new Typed('.element', {
//     strings: ["After Successful Transition Your Acctiviton Link Will Be Updated."],
//     typeSpeed: 80,
//     backSpeed: 30,
//     loop: true,
//   });

// ! =========================================
  const main = document.querySelector('.payment__alert');
  const boxs = document.querySelectorAll('.info');
  const close = document.querySelector('.services__model-close');

  boxs.forEach((i)=>{
    i.addEventListener('click',()=>{
      main.classList.add("active");
    })
  })

  close.addEventListener('click',()=>{
    main.classList.remove("active");
  });