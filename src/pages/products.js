import React from 'react'

import Layout from '../components/Layout'
import UnsplashPhoto from '../components/UnsplashPhoto'
import Annotation from '../components/Annotation'

export default () => {
    return (
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

            <section className="max-w-screen-xl mx-auto grid grid-cols-2 gap-x-16">
                <div className="mt-4">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8">The all-new <span className="bg-gradient-to-br from-yellow-400 to-red-600 bg-clip-text text-transparent">Brother Screen</span><span className="text-gray-300 font-normal">®</span></h2>

                    <div className="space-y-2 text-lg">
                        <p>
                            Gone are the days of wall-mounted Brother Screen.
                        </p>
                        <p>
                            The next generation of Brother Screen comes with you <em>wherever you go</em>. Constantly helpful, ready to keep you on track. Leave your worries about unintentional thought crimes in the 1980s — this is {new Date().getFullYear()}.
                        </p>
                        <div>
                            <span>
                                Representatives from Brother are always monitoring a random subset of screens, as part of our <em>Positive Panopticon</em> program.
                            </span>
                            <Annotation>
                                <p>Winston says that the Thought Police could be monitoring any of the Telescreens at any time, and that “you had to live... in the assumption that every sound you made was overheard, and... every movement scrutinized” (3).</p>
                                <p>This reminded me of the concept of the Panopticon, a concept of a prison designed in the 18th century where prisoners do not know if they are currently being watched by a few guards. Therefore they’re forced to constantly act as though they’re being watched.</p>
                            </Annotation>
                        </div>
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

            <div className="h-36" />

            <section
                className="max-w-2xl mx-auto bg-gray-900 px-16 py-8 rounded-xl shadow-lg text-white"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='#374151' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
                }}
            >
                <h2 className="text-4xl font-black text-center mb-8">Fall in love with life again</h2>

                <div className="text-center text-lg space-y-4 text-gray-200">
                    <p>
                        Brother Screen recognizes possible problems with your behavior and compliance.
                    </p>
                    <div>
                        <span>If problems are detected, Brother provides rehabilitation, in private and away from the rest of society. It’s all free of charge, through the <strong>LoveLife</strong> program.</span>
                        <Annotation>
                            <p>The LoveLife program is the modern-day, corporatized version of the Ministry of Love.</p>
                            <p>This “rehabilitation” that they claim to provide is actually the torture that Winston endured in the Ministry of Love.</p>
                            <p>
                                The Party would probably consider their torture rehabilitation though: O’Brien says that “we reshape [heretics]”, “burn all evil and all illusion out of him”, and “make the brain perfect” (255).
                            </p>
                        </Annotation>
                    </div>
                    <p>
                        Brother is on your side, protecting you from others and defending you from yourself.
                    </p>
                </div>
            </section>

            <div className="h-36" />

            <section className="max-w-screen-xl mx-auto grid grid-cols-2 gap-x-16">
                <div className="relative">
                    <UnsplashPhoto
                        id="1563804951831-49844db19644"
                        width={800}
                    />
                    <p className="text-white font-handwriting text-3xl transform -rotate-3 absolute bottom-8 left-8">we won this one!</p>
                </div>

                <div className="mt-4">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Keep up with all of Oceania</h2>

                    <div className="space-y-2 text-lg">
                        <p>
                            Our enemies continue to fight against our mission, but Brother is equipped and prepared to protect Oceania.
                        </p>
                        <p>
                            Stay up to date with news broadcasts you can trust from your Brother Screen. Whether it’s triumphant, uplifting, or feel-good stories, we’ll report everything that’s fit to see.
                        </p>
                        <p className="text-red-600 font-medium">
                            At the end of the day, the real enemy is ignorance of the world around us.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
