import React from "react";
import { Groups } from "src/components";
import { COLLECTION_RAW_DATA as data } from "src/rawData";

const Collectios = () => {
  return (
    <>
      <div className="collection_page">
        <Groups groups={data} />
      </div>
    </>
  );
};

export default Collectios;
