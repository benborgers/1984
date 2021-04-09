import React, { useLayoutEffect } from 'react'
import { Root, Routes } from 'react-static'
import { Router, useLocation } from '@reach/router'

import '../dist.css'

function App() {
    return (
        <Root>
            <React.Suspense fallback={<em>Loading...</em>}>
                <ScrollToTop />
                <Router>
                    <Routes path="*" />
                </Router>
            </React.Suspense>
        </Root>
    )
}

function ScrollToTop() {
    const { pathname } = useLocation()

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default App
