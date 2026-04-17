import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: "transparent",
        },

        particles: {
          number: {
            value: 70,
          },

          color: {
            value: ["#e290ea", "#7209b7", "#3a0ca3"],
          },

          links: {
            enable: true,
            distance: 140,
            color: "#e290ea",
            opacity: 0.6,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1.2,
            outModes: {
              default: "bounce",
            },
          },

          opacity: {
            value: 0.7,
          },

          size: {
            value: { min: 2, max: 4 },
          },

          // 🔥 GLOW EFFECT
          shadow: {
            enable: true,
            color: "#e290ea",
            blur: 15,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 160,
              links: {
                opacity: 1,
              },
            },
            push: {
              quantity: 4,
            },
          },
        },

        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
}
