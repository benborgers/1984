import React, { useState, useEffect } from 'react'
import { Head, prefetch } from 'react-static'
import { useLocation, navigate, Link } from '@reach/router'
import { motion } from 'framer-motion'

import Analysis from '../containers/Analysis'

const navLinks = [
    {
        name: 'About',
        link: '/'
    },
    {
        name: 'Products',
        link: '/products'
    },
    {
        name: 'Behind the Curtain',
        opensAnalysis: true
    }
]

export default function Layout({ title, children }) {
    const { pathname } = useLocation()
    const [animate, setAnimate] = useState('show')
    const [analysisOpen, setAnalysisOpen] = useState(false)

    useEffect(() => {
        if(analysisOpen === false) {
            setAnimate('show')
        }
    }, [analysisOpen])

    return (
        <>
            <Head>
                <title>{title} — Brother</title>
                <link rel="icon" href="https://emojicdn.elk.sh/📺" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet"></link>
            </Head>

            <div className="p-4 pb-64 sm:px-8 sm:pt-8 antialiased text-gray-700">
                <motion.div
                    className="fixed bottom-8 inset-x-0 flex justify-center pointer-events-none z-40"
                    variants={{
                        hide: { y: 100 },
                        show: { y: 0 }
                    }}
                    initial="hide"
                    animate={animate}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 1.3 }}
                >
                    <nav className="bg-gray-900 p-2 rounded-full max-w-max mx-auto flex space-x-2 pointer-events-auto shadow-lg">
                        {navLinks.map(item => {
                            const isCurrent = pathname === item.link

                            if(item.link) {
                                prefetch(item.link)
                            }

                            return (
                                <button
                                    key={item.name}
                                    className={`block px-3 py-1 rounded-full font-medium focus:outline-none ${isCurrent ? 'bg-gray-100 text-gray-900' : 'text-gray-100'}`}
                                    onClick={() => {
                                        if(item.opensAnalysis) {
                                            setAnalysisOpen(true)
                                        } else if(!isCurrent) {
                                            setAnimate('hide')
                                            setTimeout(() => navigate(item.link), 300)
                                        }
                                    }}
                                >
                                    {item.name}
                                </button>
                            )
                        })}
                    </nav>
                </motion.div>

                <motion.div
                    variants={{
                        hide: { opacity: 0 },
                        show: { opacity: 1 }
                    }}
                    initial="hide"
                    animate={animate}
                    transition={{ type: 'tween', ease: 'easeInOut' }}
                >
                    <div className="block sm:hidden bg-red-500 p-2 rounded-lg mb-4">
                        <p className="text-center font-medium text-white">This site only looks good on computers, because I am lazy.</p>
                    </div>

                    <div className="mb-4">
                        <Link to="/" className="text-gray-400 hover:text-gray-500 font-extrabold duration-150 transition-colors">Brother</Link>
                    </div>

                    <main>
                        {children}
                    </main>
                </motion.div>
            </div>

            <Analysis open={analysisOpen} setOpen={setAnalysisOpen} />
        </>
    )
}
