import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    link
}) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? 
        buttonStyle : STYLES[0];

        const checkButtonSize = SIZES.includes(buttonSize) ?
        buttonSize : SIZES[0];

        const isExternal = link?.startsWith('http');

        const buttonContent = (
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
            {children}
            </button>
        );

        return isExternal ? (
            <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mobile"
            >
            {buttonContent}
            </a>
        ) : (
            <Link to={link} className="btn-mobile">
            {buttonContent}
            </Link>
        );

    }