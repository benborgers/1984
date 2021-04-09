import React, { useState } from 'react'
import { Head } from 'react-static'
import { useLocation, navigate } from '@reach/router'
import { motion } from 'framer-motion'

const navLinks = [
    {
        name: 'About',
        link: '/'
    },
    {
        name: 'Products',
        link: '/products'
    }
]

export default function Layout({ title, children }) {
    const { pathname } = useLocation()
    const [animate, setAnimate] = useState('show')

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
                        {navLinks.map(({ name, link }) => {
                            const isCurrent = pathname === link
                            return (
                                <button
                                    to={link}
                                    key={name}
                                    className={`block px-3 py-1 rounded-full font-medium ${isCurrent ? 'bg-gray-100 text-gray-900' : 'text-gray-100'}`}
                                    onClick={() => {
                                        setAnimate('hide')
                                        setTimeout(() => navigate(link), 300)
                                    }}
                                >
                                    {name}
                                </button>
                            )
                        })}
                    </nav>
                </motion.div>

                <main>
                    {children}
                </main>
            </div>
        </>
    )
}
