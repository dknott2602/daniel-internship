import React from "react";

const Skeleton = ({ width, height, borderRadius }) => {
  function imageLoaded() {
    console.log('imageLoaded')
  }
  return (
    <div
      className="skeleton-box" onLoad={imageLoaded}
      style={{
        width,
        height,
        borderRadius,
      }}
    ></div>
  );
};

export default Skeleton;
