/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

type ModalProps = {
  open: boolean;
  setOpen: (e: boolean) => void;
  images: string[];
};

type Node = {
  current: HTMLElement
};

const Modal = ({ open, setOpen, images }: ModalProps): JSX.Element => {
  const portfolioSlider = useRef<Slider | null>(null);
  const modalNode: Node = useRef() as React.MutableRefObject<HTMLInputElement>;
  const handleOutsideClick = (e:any) => {
    if (modalNode.current && modalNode.current.contains(e.target)) {
      return;
    }
    // outside click
    if (open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  const settings = {
    infinite: true,
    autoplay: true,
    centerPadding: '25px',
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      {open ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <aside
              className="relative my-6 mx-auto max-w-7xl bg-white rounded"
              ref={modalNode}
            >
              <div className="px-10 pt-20 sm:py-10 my-auto">

                <Slider {...settings} ref={portfolioSlider}>
                  {images.map((image) => (
                    <div className="p-4">

                      <Image
                        height="500"
                        width="500"
                        src={image}
                        alt={image}
                      />
                    </div>
                  ))}
                </Slider>

              </div>
            </aside>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  );
};

export default Modal;
