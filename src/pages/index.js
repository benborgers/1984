import React from 'react'

import Layout from '../components/Layout'

const Cell = ({ title, color, left = false, children }) => {
    return (
        <div className={`p-8 bg-white rounded border-2 border-gray-200`}>
            <h2 className={`${color} text-2xl font-medium mb-4`}>{title}</h2>
            <div className="space-y-4 text-lg">
                {children}
            </div>
        </div>
    )
}

export default () => (
    <Layout title="About Brother, Our Culture &amp; Company News">
        <h1 className="text-2xl text-center font-medium mt-12">
            Our mission is to <span className="text-blue-500">stabilize life</span>
            <br />
            through <span className="text-red-500">technological advancement</span>,
            <br />
            in order to make life <span className="text-green-500">safe</span> and <span className="text-yellow-500">enjoyable</span>.
        </h1>

        <div className="h-24" />

        <div className="grid grid-cols-2 gap-8 max-w-screen-lg mx-auto">
            <Cell title="Stabilize Life" color="text-blue-500" left>
                <p>
                    We’re here to make sure things go smoothly.
                </p>
                <p>
                    Through technologies like the Brother Screen®, and an around-the-clock monitoring crew, we keep everything functioning as it should. We’re always here for you and the greater good.
                </p>
            </Cell>

            <Cell title="Technological Advancement" color="text-red-500">
                <p>
                    It isn’t the 1980s anymore, and we should take advantage of that.
                </p>
                <p>
                    Brother uses the latest advancements in artificial intelligence, speech recognition, and image parsing in order to protect all of us.
                </p>
            </Cell>

            <Cell title="Safe" color="text-green-500" left>
                <p>
                    When individuals that threaten society are identified, they’re removed from the general populace and helped.
                </p>
                <p>
                    With Brother working for all of us, there’s never anything to worry about. The days of worrying about personal safety are behind us.
                </p>
            </Cell>

            <Cell title="Enjoyable" color="text-yellow-500">
                <p>
                    We make sure that there’s opportunities for safe enjoyment in Oceania. Brother’s events team is well-versed in preparing productive and pleasant events.
                </p>
                <p>
                    From Hate Week to outdoor rallies, there’s approved activities for all who want them.
                </p>
            </Cell>
        </div>
    </Layout>
)
