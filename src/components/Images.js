import React, { memo, useEffect } from "react";
import PropTypes from 'prop-types';
import { GridLayout, ImageItem, Loader } from "src/components";
import { photos as photosURL } from "src/constants/api";
import infiniteScrolling from "src/HOCs/infiniteScrolling";

const Images = ({ photos, getPhotosList, isLoading, nextPage }) => {
  useEffect(() => {
    const controller = new AbortController();

    getPhotosList(
      photosURL,
      { page: nextPage },
      controller.signal
    );

    return () => controller.abort();
  }, [getPhotosList]);

  return (
    <>
      <div className="app_content">
        <div className="app_content_wrapper">
          <div className="inner_wrapper">
            <GridLayout>
              {photos.map(({ id, urls, blurHash, height, width }, indx) => (
                <ImageItem
                  key={indx}
                  url={urls?.regular}
                  bHash={blurHash}
                  name={id}
                  width={width}
                  height={height}
                />
              ))}
            </GridLayout>
            <Loader classname="loader_spinner" isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
};

Images.propTypes = {
  photos: PropTypes.array,
  getPhotosList: PropTypes.func,
  isLoading: PropTypes.bool,
  nextPage: PropTypes.number  
}

Images.defaultProps = {
  photos: []
}

export default memo(infiniteScrolling(Images));
