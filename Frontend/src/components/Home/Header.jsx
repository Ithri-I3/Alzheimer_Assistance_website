import React from 'react';

export default function Header({ image, title , text}) {
  return (
    <header className="flex flex-col items-start justify-center">
      <img src={image} alt="Home Header" className="mx-auto"/>
      <div className='mx-16'>
        <h1 className='font-bold'>{title}</h1>
        <p>{text}</p>
      </div>
    </header>
  );
}
