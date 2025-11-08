import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']
const COLORS = ['btn--white', 'btn--dark']

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    link,
    color
}) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? 
        buttonStyle : STYLES[0];

        const checkButtonSize = SIZES.includes(buttonSize) ?
        buttonSize : SIZES[0];

        const checkButtonColor = COLORS.includes(color) ? 
        buttonStyle : COLORS[0];

        return (
            <Link to={link} className='btn-mobile'>
                <button
                className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            </Link>
        )
    }