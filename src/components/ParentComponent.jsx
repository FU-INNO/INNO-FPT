import React from "react";
import DetailBlog from "./DetailBlog";
import { BannerData } from "../Data/BannerData";

const ParentComponent = () => {
  const blogUrl =
    "https://daihoc.fpt.edu.vn/den-truong-cung-duoc-chua-lanh-sinh-vien-truong-dh-fpt-cu-vai-thang-lai-co-mot-workshop-vo-cung-de-thuong/";
  const blog = BannerData.find((item) => item.url === blogUrl);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return <DetailBlog blog={blog} />;
};

export default ParentComponent;
