/* eslint-disable no-unused-vars */
import { FacebookShareButton, FacebookIcon } from "react-share";
import NewPost from "./NewPost";
const PostShare = () => {
  const currentPageUrl = window.location.href;
  const shareUrl =
    "https://suakunchoem.lof.vn/?fbclid=IwZXh0bgNhZW0CMTAAAR1mOWTHYNOFIKTkolQ_7o4GQfINuU4TKPkrFB7oX5mQK3UVN0vg3xInwD8_aem_el2XBg2LrP437Ff5_SVF5A";
  return (
    <div>
      <NewPost />
      <FacebookShareButton
        url="tutorial.com"
        quote="please sharre this post"
        hashtag="#POST-A-TREE TRỞ LẠI VỚI MÙA 4 - CÙNG NHAU, CHÚNG TA TÔ THÊM MÀU XANH CHO TRÁI ĐẤTsx,s,s"
      >
        <FacebookIcon />
      </FacebookShareButton>
    </div>
  );
};

export default PostShare;
