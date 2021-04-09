import React from 'react'

import Layout from '../components/Layout'

export default () => (
    <Layout title="Products for a Better Society">
        <div className="grid grid-cols-12 max-w-screen-sm mx-auto">
            <div className="col-start-1 col-span-12 row-start-1 z-10 mt-24">
                <div className="text-5xl font-bold text-yellow-500">
                    Radically helpful.
                    <br />
                    Always on track.
                </div>

                <p className="text-white text-xl ml-24 mt-8">
                    Learn how Brother Screen®
                    <br />helps you <span className="text-green-300">contribute more</span>
                    <br />while thinking less.
                </p>
            </div>
            <img
                className="col-start-2 col-span-11 row-start-1 rounded-lg"
                src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            />
        </div>
    </Layout>
)
