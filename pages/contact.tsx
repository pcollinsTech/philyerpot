import React from 'react';
import Banner from '../components/Banner';

const Contact = ():JSX.Element => (
  <div>
    <Banner
      title1="PHIL YER POT"
      img="/images/Microgreens/peashoots.jpg"
    />
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 " />
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 ">
          <h1 className="title uppercase text-3xl mb-4">Get in Touch</h1>
          <form>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="email"
              placeholder="Email"
            />

            <textarea
              name="comments"
              className="bg-white mt-5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              cols={30}
              rows={10}
              placeholder="Message"
            />

            <button type="submit" className="mt-5 bg-green-500 text-white hover:text-green-500 hover:bg-white hover:border-2 hover:border-green-500 w-full px-6 uppercase rounded-xl font-sans focus:outline-none py-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
