import React from 'react'
import { Popover, Transition } from '@headlessui/react'

export default function Annotation({ children }) {
    return (
        <Popover className="inline-block relative z-10">
            {({ open }) => (
                <>
                    <Popover.Button className="font-bold text-blue-500 focus:outline-none">*</Popover.Button>

                    <Transition
                        show={open}
                        enter="transition duration-200 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-150 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Popover.Panel static className="bg-gray-100 border border-gray-300 absolute py-2 px-3 rounded w-96 shadow-lg">
                            {children}
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}
