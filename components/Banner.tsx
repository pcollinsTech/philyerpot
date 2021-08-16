import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

type BannerProps = {
  title1: string;
  title2?: string;
  buttonTitle?: string;
  buttonLink?: string;
  img: string;
};

const Banner = ({
  title1, title2, buttonTitle, img, buttonLink,
}: BannerProps): JSX.Element => (
  <div className="relative">
    <div className="">
      <div className="relative ">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={img}
            alt="Fire"
          />
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-64 lg:px-8 bg-gray-900 bg-opacity-40">
          <img src="/images/logo-white.png" width="250p" alt=" Phil Yer Pot" className="mx-auto" />
          <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-white">{title2}</span>
          </h1>
          <div className="flex justify-center space-x-6 py-10">
            <a
              href="https://www.facebook.com/philyerpot"
              className="text-green-400  hover:text-green-500"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebookF className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/phil_yer_pot"
              className="text-green-400  hover:text-green-500"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-8 w-8" />
            </a>

          </div>
          {
            buttonTitle && buttonLink
            && (
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <Link href={buttonLink}>
                <a
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500  hover:bg-opacity-70 sm:px-8"
                >
                  {buttonTitle}
                </a>
              </Link>
            </div>
            )
          }
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
