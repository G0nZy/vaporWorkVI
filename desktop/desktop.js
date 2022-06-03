// Snow Effect
document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": false,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#afeeee"
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 15,
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
                    "speed": 2,
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




// PORTAL ON CLICK EVENTS

document.getElementById("pictureBox1").onclick = function(){myFunction1()};
function myFunction1(){
    window.location.href = "./desktop/aboutMe.html";
};

document.getElementById("pictureBox2").onclick = function(){myFunction2()};
function myFunction2(){
    window.location.href = "./desktop/test.html";
};

document.getElementById("pictureBox3").onclick = function(){myFunction3()};
function myFunction3(){
    window.location.href = "./desktop/test.html";
};

document.getElementById("pictureBox4").onclick = function(){myFunction4()};
function myFunction4(){
    window.location.href = "./desktop/nftShowcase.html";
};

// END OF PORTAL CLICK EVENTS