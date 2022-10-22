import React, { memo } from "react";
import PropTypes from "prop-types";
import { GridLayout, ImageItem, Loader } from "src/components";

const Images = ({ photos, isLoading }) => {
  return (
    <>
      <GridLayout>
        {photos.map(({ id, urls, blurHash, height, width }) => (
          <ImageItem
            key={id}
            url={urls?.regular}
            bHash={blurHash}
            name={id}
            width={width}
            height={height}
          />
        ))}
      </GridLayout>
      <Loader classname="loader_spinner" isLoading={isLoading} />
    </>
  );
};

Images.propTypes = {
  photos: PropTypes.array,
  isLoading: PropTypes.bool,
};

Images.defaultProps = {
  photos: [],
};

export default memo(Images);
