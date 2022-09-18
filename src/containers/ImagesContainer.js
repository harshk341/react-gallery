import React from "react";
import { GridLayout, ImageItem } from "src/components";
import { RAW_DATA as images } from "src/rawData";

const ImageContainer = () => {

  return (
    <>
      <div className="app_content">
        <div className="app_content_wrapper">
          <div className="inner_wrapper">
            <GridLayout>
              {images.map(({ id, urls, blur_hash, height, width }) => (
                <ImageItem 
                  key={id}
                  url={urls?.regular}
                  bHash={blur_hash}
                  name={id}
                  width={width}
                  height={height}
                />
              ))}
            </GridLayout>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
