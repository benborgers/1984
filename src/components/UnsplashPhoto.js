import React from 'react'

export default function UnsplashPhoto({ id, width, className = '' }) {
    return (
        <img
            className={`block rounded-lg ${className}`}
            src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=100`}
        />
    )
}
