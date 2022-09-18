import React from "react";
import PropTypes from "prop-types";
import { BlurhashCanvas } from "react-blurhash";

const BlurImage = ({ hash, classname, show }) => {
  return (
    <>
      <div className={classname + (show ? " visible" : " hidden")}>
        <BlurhashCanvas
          hash={hash}
          punch={1}
          className="blurImg"
        />
      </div>
    </>
  );
};

BlurImage.propTypes = {
    hash: PropTypes.string,
    classname: PropTypes.string,
    show: PropTypes.bool
}

export default BlurImage;
