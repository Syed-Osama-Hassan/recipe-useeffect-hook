import React from 'react'

export const Recipe = ({title,image,calories}) => {
    return (
        <div className="recipe">
            <h2>Recipe Name: {title}</h2>
            <p>Calories: {calories}</p>
            <img src={image} alt={title} />
        </div>
    )
}
