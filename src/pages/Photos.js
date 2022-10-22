import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import { Images } from "src/components";
import { photos as photosURL } from "src/constants/api";
import infiniteScrolling from "src/HOCs/infiniteScrolling";

const Photos = ({
  photos,
  fetchPhotosListOnFirstStart,
  isLoading,
  nextPage,
}) => {
  useEffect(() => {
    const controller = new AbortController();

    fetchPhotosListOnFirstStart(
      photosURL,
      { page: nextPage },
      controller.signal
    );

    return () => controller.abort();
  }, [fetchPhotosListOnFirstStart]);

  return (
    <>
      <div className="home_page">
        <Images photos={photos} isLoading={isLoading} />
      </div>
    </>
  );
};

Photos.propTypes = {
  photos: PropTypes.array,
  getPhotosList: PropTypes.func,
  isLoading: PropTypes.bool,
  nextPage: PropTypes.number,
};

Photos.defaultProps = {
  photos: [],
};

export default memo(infiniteScrolling(Photos));
