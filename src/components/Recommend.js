import React from "react";

const Recommend = () => {
  return (
    <div className='recommend'>
      <h2>おすすめ</h2>
      <h3>渋谷</h3>
      <iframe title='video' width="560" height="315" src="https://www.youtube.com/embed/Otrc2zAlJyM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3>一ノ瀬</h3>
      <iframe title='video' width="560" height="315" src="https://www.youtube.com/embed/yECZUUhljjg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3>平沢</h3>
      <iframe title='video' width="560" height="315" src="https://www.youtube.com/embed/pnsieVYy72M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
};

export default Recommend;