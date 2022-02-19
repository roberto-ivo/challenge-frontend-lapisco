import React from "react";

export const Avatar = ({ img }) => {
  return (
    <div
      style={{
        width: "90px",
        height: "90px",
        borderRadius: "50%",
        backgroundImage: `url(${img})`,
      }}
    />
  );
};
