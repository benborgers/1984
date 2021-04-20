import React, { Fragment } from 'react'
import { XIcon } from '@heroicons/react/outline'
import { Dialog, Transition } from '@headlessui/react'

export default function Analysis({ open, setOpen }) {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" static className="fixed inset-0 overflow-hidden z-50" open={open} onClose={setOpen}>
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-300 sm:duration-500"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-300 sm:duration-500"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="relative w-screen max-w-md">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                                        <button
                                            className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                                    <div className="px-4 sm:px-6">
                                        <Dialog.Title className="text-3xl font-black text-gray-900">Let’s break<br />the fourth wall.</Dialog.Title>
                                    </div>
                                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                                        <div className="prose">
                                            <p>
                                                Today, the oppressing force in <em>1984</em> would be a tech company, not a government.
                                            </p>
                                            <p>
                                                Inspiration partially from <a href="https://www.forbes.com/sites/kalevleetaru/2019/05/06/as-orwells-1984-turns-70-it-predicted-much-of-todays-surveillance-society" target="_blank">this article</a>. The website itself is modeled after <a href="https://about.google" target="_blank">Google’s company website</a>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
