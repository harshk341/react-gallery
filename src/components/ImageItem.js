import React, { useState } from "react";
import { BlurImage } from ".";
import PropTypes from "prop-types";

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

ImageItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  bHash: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ImageItem;
