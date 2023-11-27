import React from "react";

const AssetImage = ({ imageName }) => {
  const imagePath = `assets/images/${imageName}`;

  return (
    <div>
      <img src={imagePath} alt={imageName} />
    </div>
  );
};

export default AssetImage;
