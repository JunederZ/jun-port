import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from '@tsparticles/slim';

import Work from './Work';
import AboutMe from './About-Me';
import Cv from './Cv';



export default function Content() {

    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
          // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
          // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
          // starting from v2 you can add only the features you need reducing the bundle size
          //await loadAll(engine);
          //await loadFull(engine);
          await loadSlim(engine);
          //await loadBasic(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);

      const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
      };
    
      const options: ISourceOptions = useMemo(
        () => ({
          fpsLimit: 60,
          fullScreen: false,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: MoveDirection.none,
              enable: true,
              outModes: {
                default: OutMode.out,
              },
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
        }),
        [],
      );



    return (
        <>
            <section className="relative w-screen h-fit bg-[#021526] flex flex-col justify-center items-center gap-16">
                {init && (
                  <Particles
                      id="tsparticles"
                      particlesLoaded={particlesLoaded}
                      options={options}
                      className="absolute flex inset-0 h-full w-screen pointer-events-none"
                  />
                )}
                <AboutMe />
                <Work />
                <Cv />
                {/* <footer className="h-6 flex w-screen"></footer> */}
            </section>
        </>
    )

}