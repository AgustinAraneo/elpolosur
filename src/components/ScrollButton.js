import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Agrega un event listener para detectar cuando el usuario se desplaza por la página
        window.addEventListener("scroll", toggleVisibility);

        // Limpia el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="fixed bottom-10 right-10 z-50">
            {isVisible && (
                <button className="bg-gray-700 rounded-full p-3" onClick={scrollToTop}>
                    <FaArrowUp size={20} color="white" />
                </button>
            )}
        </div>
    );
};

export default ScrollButton;
