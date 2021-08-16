/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';
import Banner from '../components/Banner';

export default function IndexPage(): JSX.Element {
  return (
    <div className="bg-white">
      <main>
        <Banner
          title1="PHIL YER POT"
          img="/images/Microgreens/peashoots.jpg"
          // buttonTitle="Get a in touch"
          // buttonLink="/contact"
          title2="Coming soon"
        />

        {/* <div className="relative pt-16 pb-32 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 " />
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Stay on top of customer support
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Firenstack Solutions are the leading chimney Builders and Flue Specialist company in Northern Ireland.
                      If you require a professional team of skilled tradesmen to undertake chimney, flue and fireplace services
                      then make Firenstack your first choice for professionalism and service. With over 25 years experience
                      there is nothing we do not know about the Industry. Our Company will guarantee to provide you with a
                      unique high quality service using only the highest grade and quality materials available.

                    </p>

                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base text-gray-500">
                        Best Regards
                        <br />
                        &#34;The Chimney People&#34;
                      </p>
                    </div>
                    <footer className="mt-3">

                      <div className="text-base font-medium text-gray-700">
                        We work with all sectors including Commercial, Residential,

                        Insurance Claims and General Repairs.
                      </div>
                    </footer>
                  </blockquote>
                </div>
                <div className="mt-6">
                  <Link href="contact">
                    <a
                      className="inline-flex bg-gradient-to-r from-yellow-600 to-red-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-yellow-700 hover:to-red-700"
                    >
                      Get in touch
                    </a>
                  </Link>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full ">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="/images/Flowers/sammy.jpg"
                    alt="Sammy Sunflower"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* CTA Section */}
        {/* <div className="bg-white">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to get your project started?</span>
              <span className="block bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">
                Get in touch
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
              <Link href="/contact">
                <a
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-100"
                >
                  Get in Touch
                </a>
              </Link>
            </div>
          </div>
        </div> */}
      </main>

    </div>
  );
}
