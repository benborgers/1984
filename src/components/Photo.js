import React from 'react'

export default function Photo({ name, className = '' }) {
    return (
        <img
            className={`block rounded-lg ${className}`}
            src={`/img/${name}`}
        />
    )
}
