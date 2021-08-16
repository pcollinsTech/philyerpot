import React, { useState } from 'react';
import Image from 'next/image';
import Banner from '../components/Banner';
import Modal from '../components/Modal';

const Portfolio = ():JSX.Element => {
  const [openIdeas, setOpenIdeas] = useState(false);
  const [openLeadWork, setOpenLeadWork] = useState(false);
  const [openFlu, setOpenFlu] = useState(false);
  const [openFireplaces, setOpenFireplaces] = useState(false);
  const [openChimneys, setOpenChimneys] = useState(false);
  const [openLiners, setOpenLiners] = useState(false);
  const Ideas = [
    '/images/Ideas/black.jpeg',
    '/images/Ideas/wine.jpg',
    '/images/Ideas/insetStove.jpg',
    '/images/Ideas/modern.jpg',
    '/images/Ideas/old.jpg',
    '/images/Ideas/modern2.jpg',
    '/images/Ideas/stone.jpg',
    '/images/Ideas/stove2.jpg',
    '/images/Ideas/stove3.jpg',
    '/images/Ideas/stoveAndBin.jpg',
    '/images/Ideas/study.jpg',
    '/images/Ideas/swedish.jpg',
    '/images/Ideas/fire.jpg',
  ];
  const LeadWork = [
    '/images/LeadWork/1.jpeg',
    '/images/LeadWork/2.jpeg',
    '/images/LeadWork/3.jpeg',
    '/images/LeadWork/4.jpeg',
    '/images/LeadWork/5.jpeg',
    '/images/LeadWork/6.jpeg',
  ];
  const Flu = [
    '/images/Flu/1.jpeg',
    '/images/Flu/2.jpeg',
    '/images/Flu/3.jpeg',
    '/images/Flu/4.jpeg',
    '/images/Flu/5.jpeg',
    '/images/Flu/6.jpeg',
    '/images/Flu/7.jpeg',
    '/images/Flu/8.jpeg',
    '/images/Flu/9.jpeg',
    '/images/Flu/10.jpeg',
  ];
  const Fireplaces = [
    '/images/Fireplaces/1.jpeg',
    '/images/Fireplaces/2.jpeg',
    '/images/Fireplaces/3.jpeg',
    '/images/Fireplaces/4.jpeg',
    '/images/Fireplaces/5.jpeg',
    '/images/Fireplaces/6.jpeg',
    '/images/Fireplaces/7.jpeg',
    '/images/Fireplaces/8.jpeg',
    '/images/Fireplaces/9.jpeg',
    '/images/Fireplaces/10.jpeg',
    '/images/Fireplaces/11.jpeg',
    '/images/Fireplaces/12.jpeg',
    '/images/Fireplaces/13.jpeg',
    '/images/Fireplaces/14.jpeg',
    '/images/Fireplaces/15.jpeg',
    '/images/Fireplaces/16.jpeg',
    '/images/Fireplaces/17.jpeg',
    '/images/Fireplaces/18.jpeg',
    '/images/Fireplaces/19.jpeg',
    '/images/Fireplaces/20.jpeg',
    '/images/Fireplaces/21.jpeg',
    '/images/Fireplaces/22.jpeg',
    '/images/Fireplaces/23.jpeg',
    '/images/Fireplaces/24.jpeg',
    '/images/Fireplaces/25.jpeg',
    '/images/Fireplaces/26.jpeg',
    '/images/Fireplaces/27.jpeg',
    '/images/Fireplaces/28.jpeg',
    '/images/Fireplaces/29.jpeg',
    '/images/Fireplaces/30.jpeg',
    '/images/Fireplaces/31.jpeg',
    '/images/Fireplaces/32.jpeg',
    '/images/Fireplaces/33.jpeg',
    '/images/Fireplaces/34.jpeg',
  ];
  const Chimneys = [
    '/images/Chimneys/1.jpeg',
    '/images/Chimneys/2.jpeg',
    '/images/Chimneys/3.jpeg',
    '/images/Chimneys/4.jpeg',
    '/images/Chimneys/5.jpeg',
    '/images/Chimneys/6.jpeg',
    '/images/Chimneys/7.jpeg',
    '/images/Chimneys/8.jpeg',
    '/images/Chimneys/9.jpeg',
    '/images/Chimneys/10.jpeg',
    '/images/Chimneys/11.jpeg',
    '/images/Chimneys/12.jpeg',
    '/images/Chimneys/13.jpeg',
    '/images/Chimneys/14.jpeg',
    '/images/Chimneys/15.jpeg',
    '/images/Chimneys/16.jpeg',
    '/images/Chimneys/17.jpeg',
    '/images/Chimneys/18.jpeg',
    '/images/Chimneys/19.jpeg',
    '/images/Chimneys/20.jpeg',
    '/images/Chimneys/21.jpeg',
    '/images/Chimneys/22.jpeg',
    '/images/Chimneys/23.jpeg',
    '/images/Chimneys/24.jpeg',
    '/images/Chimneys/25.jpeg',
    '/images/Chimneys/26.jpeg',
    '/images/Chimneys/27.jpeg',
    '/images/Chimneys/28.jpeg',
    '/images/Chimneys/29.jpeg',
    '/images/Chimneys/30.jpeg',
    '/images/Chimneys/31.jpeg',
    '/images/Chimneys/32.jpeg',
    '/images/Chimneys/33.jpeg',
    '/images/Chimneys/34.jpeg',
    '/images/Chimneys/35.jpeg',
    '/images/Chimneys/36.jpeg',
  ];
  const Liners = [
    '/images/Liners/1.jpeg',
    '/images/Liners/2.jpeg',
    '/images/Liners/3.jpeg',
    '/images/Liners/4.jpeg',
    '/images/Liners/5.jpeg',
    '/images/Liners/6.jpeg',
    '/images/Liners/7.jpeg',
    '/images/Liners/8.jpeg',
    '/images/Liners/9.jpeg',
    '/images/Liners/10.jpeg',
    '/images/Liners/11.jpeg',
    '/images/Liners/12.jpeg',
    '/images/Liners/13.jpeg',
    '/images/Liners/14.jpeg',
  ];
  return (
    <div>
      <Banner
        title1="Portfolio"
        img="/images/coal.jpeg"
      />
      <div className="relative pt-2 pb-32 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48" />
        <div className="relative mx-auto">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 ">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Here is some of the work we have done for clients in the past
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10">
              <div className="col-span-1 my-2">

                <button
                  className="mx-auto text-center w-full"
                  type="button"
                  onClick={() => setOpenIdeas(!openIdeas)}
                >
                  <div className="relative mx-auto" style={{ width: '300px', height: '350px' }}>
                    <Image layout="fill" objectFit="cover" src={Ideas[0]} />

                  </div>

                  <h3 className="py-2 font-bold text-xl">Fireplace and stove ideas</h3>
                </button>
                <Modal open={openIdeas} setOpen={setOpenIdeas} images={Ideas} />
              </div>
              <div className="col-span-1 my-2 ">

                <button
                  className="mx-auto text-center w-full"
                  type="button"
                  onClick={() => setOpenLeadWork(!openLeadWork)}
                >
                  <div className="relative mx-auto" style={{ width: '300px', height: '350px' }}>
                    <Image layout="fill" objectFit="cover" src={LeadWork[0]} />
                  </div>
                  <h3 className="py-2 font-bold text-xl">Fireplace and stove ideas</h3>
                </button>
                <Modal open={openLeadWork} setOpen={setOpenLeadWork} images={LeadWork} />
              </div>
              <div className="col-span-1 my-2 ">

                <button
                  className="mx-auto text-center w-full"
                  type="button"
                  onClick={() => setOpenFlu(!openFlu)}
                >
                  <div className="relative mx-auto" style={{ width: '300px', height: '350px' }}>
                    <Image layout="fill" objectFit="cover" src={Flu[1]} />
                  </div>
                  <h3 className="py-2 font-bold text-xl">External twin wall installations</h3>
                </button>
                <Modal open={openFlu} setOpen={setOpenFlu} images={Flu} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10">
              <div className="col-span-1 my-2 ">

                <button
                  className="mx-auto text-center w-full"
                  type="button"
                  onClick={() => setOpenLeadWork(!openFireplaces)}
                >
                  <div className="relative mx-auto" style={{ width: '300px', height: '350px' }}>
                    <Image layout="fill" objectFit="cover" src={Fireplaces[8]} />
                  </div>
                  <h3 className="py-2 font-bold text-xl">External twin wall installations</h3>
                </button>
                <Modal open={openFireplaces} setOpen={setOpenFireplaces} images={Fireplaces} />
              </div>
              <div className="col-span-1 my-2 ">
                <button
                  className="mx-auto text-center w-full"
                  type="button"
                  onClick={() => setOpenChimneys(!openChimneys)}
                >
                  <div className="relative mx-auto" style={{ width: '300px', height: '350px' }}>
                    <Image layout="fill" objectFit="cover" src={Chimneys[7]} />
                  </div>
                  <h3 className="py-2 font-bold text-xl">External twin wall installations</h3>
                </button>
                <Modal open={openChimneys} setOpen={setOpenChimneys} images={Chimneys} />
              </div>
              <div className="col-span-1 my-2 ">
                <button
                  className="mx-auto text-center w-full"
                  type="button"
                  onClick={() => setOpenLiners(!openLiners)}
                >
                  <div className="relative mx-auto" style={{ width: '300px', height: '350px' }}>
                    <Image layout="fill" objectFit="cover" src={Liners[0]} />
                  </div>
                  <h3 className="py-2 font-bold text-xl">External twin wall installations</h3>
                </button>
                <Modal open={openLiners} setOpen={setOpenLiners} images={Liners} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
