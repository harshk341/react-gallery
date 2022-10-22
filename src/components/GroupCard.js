import React from "react";
import PropTypes from "prop-types";
import { ImageItem } from ".";

const GroupCard = ({ classname, name, totalImages, mainImage }) => {
  console.log(mainImage);
  return (
    <>
      <div className={classname}>
        <div className="collection_card_main">
          {mainImage.map(({ id, urls, blur_hash, height, width }) => (
            <div className={`collection_box box_${id}`} key={id}>
              <ImageItem
                url={urls?.small}
                bHash={blur_hash}
                name={id}
                width={width}
                height={height}
              />
            </div>
          ))}
        </div>
        <div className="collection_card_info">
          <span className="collection_card_total">{totalImages}</span>
        </div>
      </div>
    </>
  );
};

GroupCard.propTypes = {
  classname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  totalImages: PropTypes.number.isRequired,
  mainImage: PropTypes.array.isRequired,
};

GroupCard.defaultProps = {
  classname: "",
  mainImage: [],
};

export default GroupCard;
