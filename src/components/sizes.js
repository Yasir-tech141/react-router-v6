import React from 'react'

export default function sizes({sizes}) {
    return (
        <div className="sizes">
            {
                sizes.map((size, index) =>(
                <button key={index}>{size}</button>
                ))
            }
        </div>
    )
}
