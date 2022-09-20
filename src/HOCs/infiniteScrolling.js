import React, { useEffect } from "react";
import { photos as photosURL, limit } from "src/constants/api";

const infiniteScrolling = (Component, debounce = 0) => {
  const InnerComponent = (props) => {
    const { getPhotosList, nextPage } = props;
    useEffect(() => {
      const handleScroll = () => {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100
        ) {
          setTimeout(
            () => getPhotosList(photosURL, { page: nextPage }),
            debounce
          );
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [getPhotosList, nextPage]);
    return <Component {...props} />;
  };
  return InnerComponent;
};

export default infiniteScrolling;
