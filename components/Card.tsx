import React from 'react';

type CardProps = {
  title: string;
  description: string;
  img: string;
};

const Card = ({ title, description, img }: CardProps):JSX.Element => (
  <li>
    <div className="space-y-4">
      <div className="aspect-w-3 aspect-h-2">
        <img className="object-cover shadow-lg rounded-lg" src={img} alt="" />
      </div>
      <div className="text-lg leading-6 font-medium space-y-1">
        <h3>{title}</h3>
      </div>
      <div className="text-lg">
        <p className="text-gray-500">{description}</p>
      </div>

    </div>
  </li>
);

export default Card;
