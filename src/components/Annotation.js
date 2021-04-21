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
                        <Popover.Panel static className="bg-white ring-1 ring-black ring-opacity-5 absolute p-4 rounded-lg shadow-lg text-base space-y-2" style={{ width: 64 * 2 * 4 }}>
                            {children}
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}
