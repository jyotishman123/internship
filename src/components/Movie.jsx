/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Movie = ({ item }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`sm:min-w-[400px] min-w-[390px] mx-2 rounded-b-md `}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? (
        <video
          src='/video/video.mp4'
          autoPlay
          loop
          muted
          className="sm:h-[250px] ms:w-[400px] h-[220px] w-[370px]"
        ></video>
      ) : (
        <img src={item?.img} alt="" className="sm:h-[250px] sm:w-[400px] h-[220px] w-[370px]" />
      )}

      {isHover && (
        <div className="py-6 px-6 sm:block hidden">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="py-1 text-sm font-semibold">{item.desc}</p>
          <p className="py-1 text-sm text-slate-500">
            Rating: <span className="text-white">{item.rating} </span>
          </p>
          <p className="py-1 text-slate-500">{item.year}</p>
        </div>
      )}
    </div>
  );
};

export default Movie;
