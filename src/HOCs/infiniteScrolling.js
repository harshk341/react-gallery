import React, { useEffect } from "react";
import { photos as photosURL, limit } from "src/constants/api";

const infiniteScrolling = (Component, debounce = 0) => {
  const InnerComponent = (props) => {
    const { fetchNextPhotosList, nextPage } = props;
    useEffect(() => {
      const handleScroll = () => {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 50
        ) {
          setTimeout(
            () => fetchNextPhotosList(photosURL, { page: nextPage }),
            debounce
          );
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [fetchNextPhotosList, nextPage]);
    return <Component {...props} />;
  };
  return InnerComponent;
};

export default infiniteScrolling;
