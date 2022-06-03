// INDEX2.HTML

// Snow Effect
document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 300,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#afeeee"
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "up",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": true,
                    "attract": {
                        "enable": false,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});
// End of Snow Effect




// SWIPER EFFECT
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// END OF SWIPER EFFECT


// RETURN TO DESKTOP 
if (screen.width >= 767) {
    document.location = "../../index.html";
  }
// END OF RETURN TO DESKTOP

//   END INDEX2.HTML

// JAVASCRIPT THAT CHANGES EMAIL BUTTON TO SHOW MY EMAIL 

//   const emailBtn = document.getElementById('tLink5');
//   emailBtn.addEventListener('click', function handleClick(){
//     emailBtn.textContent = 'therealg0nzy@protonmail.ch';
//   });

//  END OF JAVASCRIPT THAT CHANGES EMAIL BUTTON TO SHOW MY EMAIL 