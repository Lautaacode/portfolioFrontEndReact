import { useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import '../layout/Particlesbg.css'

const Particlesbg = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log();
    };

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#1e1f26",
                },
            },
            fullScreen: {
                enable: false,
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: false,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: ["#03dac6", "#ff0266"]
                },
                links: {
                    color: ["#ffffff"],
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 130,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 3, max: 5 },
                },
            },
            detectRetina: false,
        }),
        [],
    );

    if (init) {
        return (
            <>
                <Particles
                    id="tsparticlesbg"
                    className="particles-bg"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
            </>
        );
    }

    return <></>;
};
export default Particlesbg;