 // When the user scrolls down 50px from the top of the document, resize the header's font size
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     document.getElementById("header-logo").style.width = "75%";
   } else {
     document.getElementById("header-logo").style.width = "100%";
   }
 } 

 gsap.from(".mast-heading", {
    x: -200,
    autoAlpha: 0,
    duration: .8,
    delay: .3,
    scrollTrigger: {
      trigger: '.masthead-interior'
    }
    }
    );

    document.getElementById('year').innerHTML = new Date().getFullYear();