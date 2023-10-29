import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          color: {
              value: "#e28ad3",
          },
          number: {
            value: 64,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.01,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 64,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0.05,
            },
            value: 0.1
          },
        },
        // interactivity: {
        //   events: {
        //     onclick: {
        //       enable: true,
        //       mode: "push",
        //     },
        //   },
        //   modes: {
        //     push: {
        //       particles_nb: 1,
        //     },
        //   },
        // },
        retina_detect: true,
        
      }}
    />
  );
}

export default Particle;
