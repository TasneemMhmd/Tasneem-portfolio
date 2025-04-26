import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, type, className, onClick, disabled, variant }) => {
    const getButtonClasses = () => {
        let classes = 'btn ';

        if (variant === 'primary') {
            classes += 'primary ';
        } else if (variant === 'secondary') {
            classes += 'secondary ';
        }

        if (className) {
            classes += className;
        }

        return classes;
    };

    return (
        <button
            type={type}
            className={getButtonClasses()}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['primary', 'secondary'])
};

Button.defaultProps = {
    type: 'button',
    className: '',
    onClick: () => { },
    disabled: false,
    variant: 'primary'
};

export default Button;