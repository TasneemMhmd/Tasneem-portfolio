import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Typed from 'typed.js';

const AnimatedText = ({ strings, typeSpeed, backSpeed, loop, className, showCursor }) => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings,
            typeSpeed,
            backSpeed,
            loop,
            showCursor,
            cursorChar: '|',
            autoInsertCss: true,
        };

        // Initialize Typed
        typed.current = new Typed(el.current, options);

        // Cleanup
        return () => {
            typed.current.destroy();
        };
    }, [strings, typeSpeed, backSpeed, loop, showCursor]);

    return <span ref={el} className={`typed-text ${className}`}></span>;
};

AnimatedText.propTypes = {
    strings: PropTypes.arrayOf(PropTypes.string).isRequired,
    typeSpeed: PropTypes.number,
    backSpeed: PropTypes.number,
    loop: PropTypes.bool,
    className: PropTypes.string,
    showCursor: PropTypes.bool
};

AnimatedText.defaultProps = {
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    className: '',
    showCursor: true
};

export default AnimatedText;