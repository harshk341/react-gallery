import React, { useState } from "react";
import { BlurImage } from ".";
import PropTypes from "prop-types";

const ImageItem = ({ name, url, bHash, width, height, usedForCollection }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = (_e) => {
    setIsLoading(false);
  };

  return (
    <>
      <div
        className={`image_container${usedForCollection ? " preview-img" : ""}`}
      >
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
  usedForCollection: PropTypes.bool,
};

export default ImageItem;
