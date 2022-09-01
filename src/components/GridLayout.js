import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { setColumn } from "src/utils/helpers";

const GridLayout = ({ children }) => {
  const [imageSet, setImageSet] = useState([]);
  const [numberOfColumns, setNumberOfColumns] = useState(
    setColumn(window.innerWidth)
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
    const resize = () => setNumberOfColumns(setColumn(window.innerWidth));
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  console.log(window.innerWidth, numberOfColumns);

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
