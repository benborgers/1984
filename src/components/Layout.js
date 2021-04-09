import React, { useState } from 'react'
import { Head } from 'react-static'
import { useLocation, navigate } from '@reach/router'
import { motion, AnimatePresence } from 'framer-motion'

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
        opensAnalysisPanel: true
    }
]

export default function Layout({ title, children }) {
    const { pathname } = useLocation()
    const [animate, setAnimate] = useState('show')
    const [analysisPanelOpen, setAnalysisPanelOpen] = useState(false)

    return (
        <>
            <Head>
                <title>{title} — Brother</title>
                <link rel="icon" href="https://emojicdn.elk.sh/📺" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>

            <div className="p-4 sm:p-8">
                <motion.div
                    className="fixed bottom-8 inset-x-0 flex justify-center pointer-events-none"
                    variants={{
                        hide: { y: 100 },
                        show: { y: 0 }
                    }}
                    initial="hide"
                    animate={animate}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 1.3 }}
                >
                    <nav className="bg-gray-900 p-2 rounded-full max-w-max mx-auto flex space-x-2 pointer-events-auto">
                        {navLinks.map(item => {
                            const isCurrent = pathname === item.link

                            return (
                                <button
                                    key={item.name}
                                    className={`block px-3 py-1 rounded-full font-medium focus:outline-none ${isCurrent ? 'bg-gray-100 text-gray-900' : 'text-gray-100'}`}
                                    onClick={() => {
                                        if(item.opensAnalysisPanel) {
                                            setAnalysisPanelOpen(true)
                                        } else {
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

                <main>
                    {children}
                </main>
            </div>

            <AnimatePresence>
                {analysisPanelOpen && (
                    <Analysis onClose={() => setAnalysisPanelOpen(false)} />
                )}
            </AnimatePresence>
        </>
    )
}
