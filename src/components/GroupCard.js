import React from "react";
import PropTypes from "prop-types";
import { ImageItem } from ".";
import { Link } from "react-router-dom";

const GroupCard = ({
  classname,
  collectionId,
  name,
  totalImages,
  mainImage,
}) => {
  return (
    <>
      <div className={classname}>
        <Link to={`/collections/${collectionId}`} className="collection_link">
          <div className="collection_card_main">
            {mainImage.map(({ id, urls, blur_hash, height, width }) => (
              <div className={`collection_box box_${id}`} key={id}>
                <ImageItem
                  url={urls?.small}
                  bHash={blur_hash}
                  name={id}
                  width={width}
                  height={height}
                  usedForCollection={true}
                />
              </div>
            ))}
          </div>
          <div className="collection_card_info">
            <span className="collection_card_title">{name}</span>
            <span className="collection_card_total">
              {totalImages} {"photos"}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

GroupCard.propTypes = {
  classname: PropTypes.string.isRequired,
  collectionId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  totalImages: PropTypes.number.isRequired,
  mainImage: PropTypes.array.isRequired,
};

GroupCard.defaultProps = {
  classname: "",
  mainImage: [],
};

export default GroupCard;
