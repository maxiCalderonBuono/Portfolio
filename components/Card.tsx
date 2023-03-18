import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

export default function Card() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 ml-8 leading-none text-white rounded-md bg-gradient-to-r from-yellow-500 to-yellow-400 hover:opacity-90"
        >
          Card
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-gray-800 shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-center text-white"
                  >
                    Let's link up.
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="font-bold text-center text-gray-400 text-md">
                      Discover more about me by scanning my QR code.
                    </p>
                    <div className="flex flex-col font-bold text-blue-100 justify-evenly">
                      {/* <div className="flex flex-col items-center gap-3 mt-4">
                        <p>Web</p>
                        <Image
                          priority
                          src="/images/Portfolio.png"
                          height={180}
                          width={180}
                          alt="Qr for my pesonal porfolio"
                          className="rounded-lg"
                        />
                      </div> */}
                      <div className="flex flex-col items-center gap-3">
                        <p className="mt-4 font-bold">LINKEDIN</p>
                        <Image
                          priority
                          src="/images/Linkedin.jpg"
                          height={160}
                          width={160}
                          alt="Qr for my pesonal porfolio"
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
