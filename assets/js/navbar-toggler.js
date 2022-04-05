
const btn=document.querySelector('.navigation-toggler-btn');
const navbar=document.querySelector('#navigation-bar');
  btn.addEventListener('click',()=>{
    const visibility= navbar.getAttribute('data-visible');
    console.log(visibility);
    if(visibility==="false"){
      navbar.setAttribute('data-visible',true);
      btn.setAttribute('aria-expanded',true);
    }else{
      navbar.setAttribute('data-visible',false);
      btn.setAttribute('aria-expanded',false);
    }
  });
  document.addEventListener('click',(e)=>{
    if(e.target.id !== 'navigation-bar' && e.target.id !=='navigation-toggler-btn'){
      navbar.setAttribute('data-visible',false);
      btn.setAttribute('aria-expanded',false);
    }
  });
  