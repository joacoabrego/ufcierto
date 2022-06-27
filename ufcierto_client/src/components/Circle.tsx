import React from "react";

const Circle = (props) => {
  return (
    <div
      style={{
        ...props.style,
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
        backgroundColor: props.color,
      }}
    ></div>
  );
};

export default Circle;
