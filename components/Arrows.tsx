import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import cx from 'classnames';

type CustomArrowProps = {
  className?: string;
  onClick?: () => void;
};

function PrevArrow({ className, onClick }: CustomArrowProps): JSX.Element {
  const classes = cx({
    'bg-gray-100 items-center': true,
  }, className);
  return (
    <div
      className={classes}
      style={{ display: 'block', color: 'black' }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={onClick}
    >
      <AiOutlineArrowLeft className="text-center text-black" />
    </div>
  );
}

function NextArrow({ className, onClick }: CustomArrowProps): JSX.Element {
  const classes = cx({
    'bg-gray-100 items-center': true,
  }, className);
  return (
    <div
      className={classes}
      style={{ display: 'block', color: 'black' }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={onClick}
    >
      <AiOutlineArrowRight className="text-center text-black" />
    </div>
  );
}

export { NextArrow, PrevArrow };
