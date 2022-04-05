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
  //swipe
  var NAV_WITH = 300;
  var speed = 200;
  
  var swipeOptions = {
      triggerOnTouchEnd: true,
      swipeStatus: swipeStatus,
      allowPageScroll: "vertical",
      threshold: 100
  };
  
  $(function () {
      navbar.swipe(swipeOptions);
  });
  
  /**
   * Catch each phase of the swipe.
   * move : we drag the div
   * cancel : we animate back to where we were
   * end : we animate to the next image
   */
  function swipeStatus(event, phase, direction, distance) {
      
      if (phase == "move" && (direction == "left")) {
          var duration = 0;
  
         scrollNav(distance, duration);
  
      } else if (phase == "cancel") {
          scrollNav(0, speed);
      } else if (phase == "end") {
             hideNav();
      }
  }
  function hideNav() {
      scrollNav(NAV_WITH, speed);
  }
  
  /**
   * Manually update the position of the nav on drag
   */
  function scrollNav(distance, duration) {
      navbar.css("transition-duration", (duration / 1000).toFixed(1) + "s");
      //inverse the number we set in the css
      var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
      navbar.css("transform", "translate(" + value + "px,0)");
  }
  