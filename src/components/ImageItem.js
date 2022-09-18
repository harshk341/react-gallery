import React, { useState } from "react";
import { BlurImage } from ".";

const ImageItem = ({ name, url, bHash, width, height }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = (_e) => {
    setIsLoading(false);
  };

  return (
    <>
      <div className="image_container">
        <BlurImage hash={bHash} classname="blur_wrapper" show={isLoading} />
        <img
          src={url}
          alt={name}
          width={width}
          height={height}
          onLoad={handleLoad}
          loading="lazy"
        />
      </div>
    </>
  );
};

export default ImageItem;
