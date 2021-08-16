import { format } from 'date-fns';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = ():JSX.Element => (

  <footer className="bg-gray-50" aria-labelledby="footer-heading">

    <div className="max-w-7xl mx-auto  pb-8 px-4 sm:px-6  lg:px-8">
      <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
        <div className="flex space-x-6 md:order-2">
          <a
            href="https://www.facebook.com/philyerpot"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">Facebook</span>
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/phil_yer_pot"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">Instagram</span>
            <FaInstagram />
          </a>

        </div>
        <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1 text-center">
          &copy;
          {' '}
          {format(new Date(), 'yyyy')}
          {' '}
          Phil Yer Pot.
          {' '}
          <br />
          All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
