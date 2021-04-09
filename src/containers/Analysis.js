import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { XIcon } from '@heroicons/react/outline'

export default function Analysis({ onClose }) {
    useEffect(() => {
        const listener = e => {
            if(e.keyCode === 27) {
                onClose()
            }
        }

        document.addEventListener('keydown', listener)

        return () => document.removeEventListener('keydown', listener)
    })

    return (
        <motion.div
            className="bg-gray-200 h-screen w-screen fixed inset-0 p-4 sm:p-8"
            initial={{ y: window.innerHeight + 100, opacity: 0.9 }}
            animate={{ y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.4 } }}
            exit={{ y: window.innerHeight + 100, opacity: 0.9, transition: { ease: 'easeIn', duration: 0.3 } }}
        >
            <div className="flex justify-end mb-2">
                <button onClick={onClose} className="focus:outline-none">
                    <XIcon className="h-6 text-red-500" />
                </button>
            </div>

            <h1 className="font-black text-6xl tracking-tight text-gray-900 mb-4">
                Let’s break
                <br />
                the fourth wall.
            </h1>

            <div className="prose">
                hi there
            </div>
        </motion.div>
    )
}
