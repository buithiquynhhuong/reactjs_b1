// import giúp file khác import được đến file này và sử dụng
// eslint-disable-next-line no-unused-vars
import React from "react";
// thẻ jsx giúp viết html trong file js,jsx là object của react
// nền đỏ, padding 30, màu chữ trắng, fs 20px, nd căn giữa
export const Footer = () => {
  return (
    <div className="bg-red-500 text-white text-center text-xl p-header-padding mx-auto">
      Footer
    </div>
  );
};
// export giúp các file khác import được đến file này và sử dụng
export default Footer;
