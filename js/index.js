const swiper = new Swiper('.swiper', {
    // Optional parameters
   autoplay: true,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    
  });

  gsap.to('.masthead-bg', {
    yPercent: 40,
    scrollTrigger: {
      trigger: '.masthead',
      start: "top top", 
      end: "bottom top",
      scrub: true,
     
    }
  });


  gsap.to('.workmanship-bg', {
    yPercent: 60,
    scrollTrigger: {
      trigger: '.workmanship',
      start: "top bottom", 
      end: "bottom top",
      scrub: true,
    
    }
  });

  gsap.from(".mast-heading", {
    x: -200,
    autoAlpha: 0,
    duration: .8,
    delay: .3,
    scrollTrigger: {
      trigger: '.masthead'
    }
  }
  );

  let workmantl = gsap.timeline({
    scrollTrigger: {
      trigger: '.workmanship__container'
    }
  });

  workmantl.from('#wkmn-h3', {
    y: 50,
    autoAlpha: 0
  }).from("#wkmn-h1", {
    y: 50, 
    autoAlpha: 0
  }).from("#wkmn-btn", {
   
    autoAlpha: 0
  });

  gsap.from('.home-about__content', {
    autoAlpha: 0,
    duration: 1.8,
    scrollTrigger: {
      trigger: '.home-about'
    }
  });

  gsap.from('.home-about__contact', {
    x: 400,
    autoAlpha: 0,
    duration: 1.5,
    
    scrollTrigger: {
      trigger: '.home-about__contact'
    }
  })

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header-logo").style.width = "75%";
    } else {
      document.getElementById("header-logo").style.width = "100%";
    }
  } 

  document.getElementById('year').innerHTML = new Date().getFullYear();