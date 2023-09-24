import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
export default function Particletest(){
    async function loadParitlces(main){
        await loadFull(main)
    }
return (
  <Particles 
  className="trial"
  id="tsparticles"
  init={loadParitlces}
  options={
    {
        "fullScreen": {
            "enable": false,
            "zIndex": 100
        },
        "particles": {
            "number": {
                "value": 20,
                "density": {
                    "enable": false,
                    "value_area": 3000
                }
            },
            "color": {
                "value": "#f9ab00"
            },
            "shape": {
                "type": "circle",
                "options": {
                    "sides": 3
                }
            },
            "opacity": {
                "value": 0.8,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 3,
                    "opacity_min": 0.2,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                    "enable": true,
                    "speed": 10,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 600,
                "color": "#f9ab00",
                "opacity": 0.5,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 7,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": ["grab"]
                },
                "onclick": {
                    "enable": false,
                    "mode": "bubble"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "background": {
          
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        }
    }
  }
  />
)
}