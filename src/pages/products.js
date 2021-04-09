import React from 'react'

import Layout from '../components/Layout'
import UnsplashPhoto from '../components/UnsplashPhoto'

export default () => (
    <Layout title="Products for a Better Society">
        <section className="grid grid-cols-12 max-w-screen-sm mx-auto">
            <div className="col-start-1 col-span-12 row-start-1 z-10 mt-24">
                <h1 className="text-5xl font-bold text-yellow-500">
                    Radically helpful.
                    <br />
                    Always on track.
                </h1>

                <p className="text-white text-xl ml-24 mt-8">
                    Learn how Brother Screen®
                    <br />helps you <span className="text-green-300">contribute more</span>
                    <br />while thinking less.
                </p>
            </div>
            <UnsplashPhoto
                id="1600856209923-34372e319a5d"
                width={800}
                className="col-start-2 col-span-11 row-start-1"
            />
        </section>

        <div className="h-24" />

        {/* Brother Screen */}
        <section className="max-w-screen-xl mx-auto grid grid-cols-2 gap-y-4">
            <div className="mt-4">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8">The <span className="bg-yellow-100 inline-block px-1 italic rounded-lg font-black">all-new</span> Brother Screen®</h1>

                <div className="prose sm:prose-lg">
                    <p>
                        Gone are the days of wall-mounted Brother Screens.
                    </p>
                </div>
            </div>

            <div className="relative">
                <UnsplashPhoto
                    id="1506377711776-dbdc2f3c20d9"
                    width={800}
                />
                <p className="text-white font-handwriting text-3xl transform -rotate-3 absolute top-32 left-6">comes everywhere <br /> with you!</p>
            </div>
        </section>
    </Layout>
)
