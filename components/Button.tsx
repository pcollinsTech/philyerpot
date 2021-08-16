import React from 'react';
import cx from 'classnames';
import Link from 'next/link';

type ButtonProps = {
  link: string;
  title: string;
  color: string;
};
const Button = ({ link, title, color }: ButtonProps): JSX.Element => {
  const classes = cx({
    'w-full px-6 uppercase rounded-xl font-sans focus:outline-none py-3': true,
    'bg-purple-500 text-white hover:text-purple-500 hover:bg-white hover:border-2 hover:border-purple-500': color === 'purple',
    'bg-orange-500 text-white hover:text-orange-500 hover:bg-white hover:border-2 hover:border-orange-500': color === 'orange',
    'bg-green-500 text-white hover:text-green-500 hover:bg-white hover:border-2 hover:border-green-500': color === 'green',
    'bg-blue-500 text-white hover:text-blue-500 hover:bg-white hover:border-2 hover:border-blue-500': color === 'blue',
  });

  return (
    <button type="button" className={classes}>
      <Link href={link}>
        <a>
          {title}
        </a>
      </Link>
    </button>
  );
};

export default Button;
