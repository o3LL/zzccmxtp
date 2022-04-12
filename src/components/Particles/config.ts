import type { RecursivePartial, IOptions } from 'tsparticles';

const config: RecursivePartial<IOptions> = {
  fullScreen: {
    enable: true,
    zIndex: -10,
  },
  particles: {
    number: {
      value: 0.4,
      density: {
        enable: true,
        area: 9.469771699587272,
      },
    },
    color: {
      value: "#5fff7b",
    },
    shape: {
      type: "image",
      stroke: {
        width: 0,
        color: "#000000",
      },
      image: [
        {
          src: "/zz.webp",
          width: 80,
          height: 80,
        },
        {
          src: "/poo.webp",
          width: 80,
          height: 80,
        },
      ],
    },
    opacity: {
      value: 1,
      random: true,
    },
    size: {
      value: 15.782952832645451,
      random: true,
    },
    move: {
      enable: true,
      speed: { min: 0.1, max: 4},
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 8417.913319543995,
        rotateY: 6814.5012586784715,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        mode: 'push',
        enable: true,
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 60,
        duration: 0.1,
        speed: 1
      },
      push: {
        quantity: 2
      }
    },
  },
  fpsLimit: 120,
  retina_detect: true,
};

export default config;
