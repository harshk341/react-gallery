import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { setColumn } from "src/utils/helpers";
import { useSelector } from "src/store";

const GridLayout = ({ children }) => {
  const { windowSize } = useSelector(state => state.window);
  const [imageSet, setImageSet] = useState([]);
  const [numberOfColumns, setNumberOfColumns] = useState(
    setColumn(windowSize)
  );

  useEffect(() => {
    let selectCol = 0;
    let items = [];

    for (let i = 0; i < numberOfColumns; i++) items.push([]);

    for (let j = 0; j < children.length; j++) {
      items[selectCol].push(children[j]);
      selectCol++;
      if (selectCol >= numberOfColumns) selectCol = 0;
    }

    setImageSet(items);
  }, [numberOfColumns, children]);

  useEffect(() => {
    setNumberOfColumns(setColumn(windowSize));
  }, [windowSize]);

  return (
    <>
      <div
        className="images_wrapper"
        style={{ gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }}
      >
        {imageSet.map((set, index) => (
          <div className={`grid_column_${index}`} key={index}>
            {set}
          </div>
        ))}
      </div>
    </>
  );
};
GridLayout.propTypes = {
  children: PropTypes.node,
};

export default GridLayout;
