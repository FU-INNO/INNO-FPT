import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import ContactUs from "./Contact";
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
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61340.84301409581!2d108.13494107910157!3d16.07572560000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b509a30cfb%3A0xb93a05e26b3b28ff!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1720690448024!5m2!1svi!2s",
    },
  ];
  return (
    <footer className="bg-[#22836c] text-white py-10 px-5">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <ContactUs />
        <div>
          <h3 className="text-xl font-semibold mb-4">
            <span role="img" aria-label="location">
              📍
            </span>{" "}
            Địa điểm
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <Tooltip placement="leftTop" title={text(list.at(0).link)}>
              <img
                src="https://ecology.websitelayout.net/img/content/work-04.jpg"
                alt="Gallery item"
                className="w-full h-auto rounded-md"
              />
              <p>Hà Nội campus</p>
            </Tooltip>
            <Tooltip placement="top" title={text(list.at(1).link)}>
              <img
                src="https://ecology.websitelayout.net/img/content/work-04.jpg"
                alt="Gallery item"
                className="w-full h-auto rounded-md"
              />
              <p>Cần Thơ campus</p>
            </Tooltip>{" "}
            <Tooltip placement="top" title={text(list.at(2).link)}>
              <img
                src="https://ecology.websitelayout.net/img/content/work-04.jpg"
                alt="Gallery item"
                className="w-full h-auto rounded-md"
              />
              <p>Đà Nẵng campus</p>
            </Tooltip>{" "}
            <Tooltip placement="bottomLeft" title={text(list.at(3).link)}>
              <img
                src="https://ecology.websitelayout.net/img/content/work-04.jpg"
                alt="Gallery item"
                className="w-full h-auto rounded-md"
              />
              <p>Hồ Chí Minh campus</p>
            </Tooltip>{" "}
            <Tooltip placement="bottom" title={text(list.at(4).link)}>
              <img
                src="https://ecology.websitelayout.net/img/content/work-04.jpg"
                alt="Gallery item"
                className="w-full h-auto rounded-md"
              />
              <p>Quy Nhơn campus</p>
            </Tooltip>{" "}
            <Tooltip placement="bottom" title={text(list.at(5).link)}>
              <img
                src="https://ecology.websitelayout.net/img/content/work-04.jpg"
                alt="Gallery item"
                className="w-full h-auto rounded-md"
              />
              <p>Tây Nguyên</p>
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
