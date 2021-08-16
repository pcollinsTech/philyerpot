import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import {
  MenuIcon, XIcon,
} from '@heroicons/react/outline';

const Nav = (): JSX.Element => {
  const navItems = [
    {
      link: '/',
      title: 'Home',
    },
    {
      link: '/portfolio',
      title: 'Portfolio',
    },
    {
      link: '/contact',
      title: 'Contact Us',
    },
  ];

  return (
    <header className="bg-gray-100">
      <Popover className="relative ">
        {({ open }) => (
          <>
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">

                  <a>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="/images/logo.png"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                {/* {
                  navItems.map((link) => (
                    <Link href={link.link}>
                      <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                        {link.title}
                      </a>
                    </Link>

                  ))
                } */}

              </Popover.Group>

            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden bg-white"
              >
                <div className=" divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="/images/logo.png"
                          alt="FireNStack Solutions"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 px-5">
                    <div className="flex flex-col gap-8">
                      {/* {
                        navItems.map((link) => (
                          <Link href={link.link}>
                            <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                              {link.title}
                            </a>
                          </Link>

                        ))
                      } */}

                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </header>
  );
};

export default Nav;
