import React from "react";
import PropTypes from "prop-types";
import { BlurhashCanvas } from "react-blurhash";
import { isHashValid } from "src/utils/helpers";

const BlurImage = ({ hash, classname, show }) => {
  return (
    <>
      {Boolean(isHashValid(hash)) ? (
        <div className={classname + (show ? " visible" : " hidden")}>
          <BlurhashCanvas hash={hash} punch={1} className="blurImg" />
        </div>
      ) : null}
    </>
  );
};

BlurImage.propTypes = {
  hash: PropTypes.string,
  classname: PropTypes.string,
  show: PropTypes.bool,
};

export default BlurImage;
