import React, { useState, useEffect, useRef } from "react";

const LazyLoadSection = () => {
    const [isVisible, setIsVisible] = useState(false); // Estado para cargar el contenido
    const sectionRef = useRef(null); // Referencia al elemento

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true); // Cambiar el estado a `true` si la sección es visible
                        observer.disconnect(); // Dejar de observar una vez cargado
                    }
                });
            },
            {
                threshold: 0.1, // 10% del elemento debe ser visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current); // Observar el elemento
        }

        return () => {
            if (observer && sectionRef.current) {
                observer.unobserve(sectionRef.current); // Limpiar el observer al desmontar
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: isVisible ? "#4CAF50" : "#f0f0f0",
            }}
        >
            {isVisible ? (
                <h1>¡Contenido cargado!</h1>
            ) : (
                <p>Desplázate para cargar el contenido...</p>
            )}
        </div>
    );
};

const Appejemplo = () => {
    return (
        <div>
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#2196F3",
                    color: "white",
                }}
            >
                <h1>Sección 1</h1>
            </div>
            <LazyLoadSection />
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#FF5722",
                    color: "white",
                }}
            >
                <h1>Sección 3</h1>
            </div>
        </div>
    );
};

export default Appejemplo;
