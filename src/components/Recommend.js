import React from "react";

const Recommend = () => {
  return (
    <div className="recommend">
      <h2>おすすめ</h2>
      <h3>渋谷</h3>
      <iframe
        title="video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Otrc2zAlJyM"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3>一ノ瀬</h3>
      <iframe
        title="video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/yECZUUhljjg"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3>平沢</h3>
      <iframe
        title="video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pnsieVYy72M"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Recommend;
