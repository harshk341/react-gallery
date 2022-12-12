import React from "react";
import PropTypes from "prop-types";
import { GridLayout, GroupCard } from "src/components";

const Groups = ({ groups }) => {
  return (
    <>
      <GridLayout>
        {groups.map(({ id, title, total_photos, preview_photos }) => (
          <GroupCard
            key={id}
            classname={`collection_card_${id}`}
            collectionId={id}
            name={title}
            totalImages={total_photos}
            mainImage={preview_photos}
          />
        ))}
      </GridLayout>
    </>
  );
};

Groups.propTypes = {
  groups: PropTypes.array,
};

Groups.defaultProps = {
  photos: [],
};

export default Groups;
