import React from "react";


export function Button({
    children, // whatever content is inside the <Button> ... </Button>, like text or icons
    variant = 'primary',
    size = 'md',
    className = '', // lets you pass extra classes if you want to override or extend styles
    ...props // catches any other props like onClick, type, disabled, etc. and passes them to the <button> element
}) {
    const base = 'rounded-2xl font-medium transition-colors hover:cursor-pointer hover:font-bold' //universal sytles for all buttons

    const variants = {
        primary: 'bg-primary text-background hover:bg-accent',
        secondary: 'bg-accent-200 text-text-800 hover:bg-gray-300',
        danger: 'bg-red-600 text-white hover:bg-red-700',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-5 py-3 text-lg',
    };

    const finalClassName = `${base} ${variants[variant] || ''} ${sizes[size] || ''} ${className}`; // The || '' if invalid variant or size is passed, it doesn't break the class string

    return (
        <button className={finalClassName} {...props}>
            {children}
        </button>
    )
}