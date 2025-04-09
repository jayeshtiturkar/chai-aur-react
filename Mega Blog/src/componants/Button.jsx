import React from 'react'

const Button = ({ children, type = 'button', bgColor = 'bg-blue-600', textColour = 'text-white', classname = "", ...Props }) => {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColour} ${classname}`}
            {...Props} type={`${type}`}>
            {children}
        </button>
    )
}

export default Button