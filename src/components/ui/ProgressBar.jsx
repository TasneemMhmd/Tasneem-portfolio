import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ percentage, label, className }) => {
    return (
        <div className={`progress-wrapper ${className}`}>
            {label && (
                <div className="progress-label">
                    <span>{label}</span>
                    <span className="progress-percentage">{percentage}%</span>
                </div>
            )}
            <div className="skill-progress">
                <div
                    className="progress-bar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired,
    label: PropTypes.string,
    className: PropTypes.string
};

ProgressBar.defaultProps = {
    label: '',
    className: ''
};

export default ProgressBar;