import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>作者:{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt={data.alt} />
      </div>
      <p>
        下載圖片:<a target="_blank" rel="noreferrer" href={data.src.large}>點擊這裡</a>{" "}
      </p>
    </div>
  );
};

export default Picture;
