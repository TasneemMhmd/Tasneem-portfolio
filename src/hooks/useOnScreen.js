// src/hooks/useOnScreen.js
import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element is visible in the viewport
 * @param {Object} options - IntersectionObserver options
 * @returns {Array} [ref, isVisible] - Reference to attach to the element and boolean indicating visibility
 */
const useOnScreen = (options = {}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, options);

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [ref, options]);

    return [ref, isVisible];
};

export default useOnScreen;