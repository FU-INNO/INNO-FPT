import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import hn from "../assets/hanoi.jpg";
import dn from "../assets/danang.jpg";
import hcm from "../assets/hcm.jpg";
import taynguyen from "../assets/hue.jpg";
import cantho from "../assets/cantho.jpg";
import quynhon from "../assets/quynhon.jpeg";
import ContactFooter from "./ContactFooter";

const text = (src) => {
  return (
    <>
      <iframe
        src={src}
        width="200"
        height="200"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};
const Footer = () => {
  const list = [
    {
      key: "HN",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476736.8117067444!2d105.24513783281249!3d21.012416700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc60e7d3f19%3A0x2be9d7d0b5abcbf4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1720690153622!5m2!1svi!2s",
    },
    {
      key: "CT",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.053354137063!2d105.7324316!3d10.0124518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0882139720a77%3A0x3916a227d0b95a64!2sFPT%20University!5e0!3m2!1svi!2s!4v1720690317195!5m2!1svi!2s",
    },
    {
      key: "DN",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18247.2577336294!2d108.24777793442645!3d15.960676408626242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142116949840599%3A0x365b35580f52e8d5!2zxJDhuqFpIGjhu41jIEZQVCDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1720685581763!5m2!1svi!2s",
    },
    {
      key: "HCM",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.610010397031!2d106.809883!3d10.841127599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgVFAuIEhDTQ!5e0!3m2!1svi!2s!4v1720690377680!5m2!1svi!2s",
    },
    {
      key: "QN",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.5848111991386!2d109.2191454!3d13.8038844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6bf778c80973%3A0x8a7d0b5aa0af29c7!2zxJDhuqFpIGjhu41jIEZQVCBRdXkgTmjGoW4!5e0!3m2!1svi!2s!4v1720690408150!5m2!1svi!2s",
    },
    {
      key: "TN",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912911.5335594548!2d106.67489010970101!3d16.4415899678424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a10067072859%3A0xb0f09f60bfff5b5a!2zRlBUIEh14bq_!5e0!3m2!1svi!2s!4v1720715450636!5m2!1svi!2s",
    },
  ];
  return (
    <footer className="bg-[#22836c] text-white py-10 px-5">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <ContactFooter />
        <div>
          <h3 className="text-xl font-semibold mb-4">
            <span role="img" aria-label="location">
              📍
            </span>{" "}
            Địa điểm
          </h3>
          <div className="grid grid-cols-3 gap-7">
            <Tooltip placement="leftTop" title={text(list.at(0).link)}>
              <img
                src={hn}
                alt="Gallery item"
                className="w-full h-full rounded-md"
              />
              <p>Hà Nội </p>
            </Tooltip>
            <Tooltip placement="top" title={text(list.at(1).link)}>
              <img
                src={cantho}
                alt="Gallery item"
                className="w-full h-full rounded-md"
              />
              <p>Cần Thơ </p>
            </Tooltip>{" "}
            <Tooltip placement="top" title={text(list.at(2).link)}>
              <img
                width="100px"
                height="50px"
                src={dn}
                alt="Gallery item"
                className="w-full h-full rounded-md"
              />
              <p>Đà Nẵng </p>
            </Tooltip>{" "}
            <Tooltip placement="left" title={text(list.at(3).link)}>
              <img
                src={hcm}
                alt="Gallery item"
                className="w-full h-full rounded-md"
              />
              <p>Hồ Chí Minh </p>
            </Tooltip>{" "}
            <Tooltip placement="bottomLeft" title={text(list.at(4).link)}>
              <img
                src={quynhon}
                alt="Gallery item"
                className="w-full h-full rounded-md"
              />
              <p>Quy Nhơn </p>
            </Tooltip>{" "}
            <Tooltip placement="bottom" title={text(list.at(5).link)}>
              <img
                src={taynguyen}
                alt="Gallery item"
                className="w-full h-full rounded-md"
              />
              <p>Huế</p>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-white mt-10 pt-5">
        <p>
          © 2024 FPT University by{" "}
          <Link to="#" className="text-[#d8b952]">
            Happy team
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
