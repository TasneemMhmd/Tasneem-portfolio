import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className, onClick, hoverable }) => {
    const getCardClasses = () => {
        let classes = 'card ';

        if (hoverable) {
            classes += 'hover-float ';
        }

        if (className) {
            classes += className;
        }

        return classes;
    };

    return (
        <div className={getCardClasses()} onClick={onClick}>
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    hoverable: PropTypes.bool
};

Card.defaultProps = {
    className: '',
    onClick: null,
    hoverable: true
};

export default Card;