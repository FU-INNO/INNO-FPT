import { FacebookShareButton, FacebookIcon } from "react-share";
import NewPost from "./NewPost";
const PostShare = () => {
  const currentPageUrl = window.location.href;

  return (
    <div>
      <NewPost />
      <FacebookShareButton
        url={currentPageUrl}
        quote="please sharre this post"
        hashtag="#POST-A-TREETRỞ LẠI VỚI MÙA 4 - CÙNG NHAU, CHÚNG TA TÔ THÊM MÀU XANH CHO TRÁI ĐẤTsx,s,s"
      >
        <FacebookIcon />
      </FacebookShareButton>
    </div>
  );
};

export default PostShare;
