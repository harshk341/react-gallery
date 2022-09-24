import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import { Images } from "src/components";
import { photos as photosURL } from "src/constants/api";
import infiniteScrolling from "src/HOCs/infiniteScrolling";

const Home = ({ photos, getPhotosList, isLoading, nextPage }) => {
  useEffect(() => {
    const controller = new AbortController();

    getPhotosList(photosURL, { page: nextPage }, controller.signal);

    return () => controller.abort();
  }, [getPhotosList]);

  return (
    <>
      <div className="home_page">
        <Images photos={photos} isLoading={isLoading} />
      </div>
    </>
  );
};

Home.propTypes = {
  photos: PropTypes.array,
  getPhotosList: PropTypes.func,
  isLoading: PropTypes.bool,
  nextPage: PropTypes.number,
};

Home.defaultProps = {
  photos: [],
};

export default memo(infiniteScrolling(Home));
