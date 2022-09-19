import React from "react";
import PropTypes from 'prop-types';

const Loader = ({ isLoading, classname }) => {
  return (
    <>
      {isLoading ? (
        <div className={classname}>
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

Loader.propTypes = {
  classname: PropTypes.string,
  isLoading: PropTypes.bool,
}

export default Loader;
