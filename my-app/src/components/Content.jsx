// import giúp file khác import được đến file này và sử dụng
// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "./Card.jsx";

// thẻ jsx giúp viết html trong file js,jsx là object của react
// nền xanh dương, padding 30px, màu chữ trắng, fs 20px, nd căn giữa, thêm 3 thẻ màu xanh lá
export const Content = () => {
  return (
    <div className="bg-blue-700 text-white text-xl p-[30px] mx-auto col-span-3">
      <div className="text-center mb-4">Content</div>

      {/* Bố cục grid 3 cột cho các thẻ card */}
      <div className="grid grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

// export giúp các file khác import được đến file này và sử dụng
export default Content;
