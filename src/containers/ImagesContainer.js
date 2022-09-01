import React from "react";
import { GridLayout } from "src/components";
import { RAW_DATA as images } from "src/rawData";

const ImageContainer = () => {
  return (
    <>
      <div className="app_content">
        <div className="app_content_wrapper">
          <div className="inner_wrapper">
            <GridLayout>
              {images.map(({ id, urls }) => (
                <img src={urls.small} alt="" key={id} />
              ))}
            </GridLayout>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
