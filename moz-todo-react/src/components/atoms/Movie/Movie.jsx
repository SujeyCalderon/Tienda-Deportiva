import React from "react";

const Movie = ({ src, type }) => {
  return (
    <video controls autoPlay width="600">
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default Movie;
