import { useState } from "react";
import { Avatar, Button, Modal, Typography } from "antd";
import "../styles/ChatBox.css";
import v3 from "../assets/chat.png";
import person from "../assets/person.svg";
const ChatBox = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  // eslint-disable-next-line no-unused-vars
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="all-demo fixed top-0 right-[-26rem] bg-orange-700 shadow-lg z-50 transition-all ease-in-out duration-200 hidden lg:inline-block font-merienda">
        <div
          className="text-black text-xs uppercase py-1.5 px-2.5 font-medium alt-font flex"
          onClick={showModal}
        >
          <div className="flex items-center justify-center">
            <img
              className="far fa-envelope text-white text-base align-middle relative top-[-0.25rem]"
              width={"50px"}
              height={"50px"}
              src={v3}
              alt="chat icon"
            />
            <span className="text-white text-base relative top-0 opacity-0">
              Chat with AI
            </span>
          </div>
        </div>
      </div>

      <Modal
        title={
          <div className="flex justify-start">
            <Avatar
              src="https://vcdn.subiz-cdn.com/file/firpkaqtviltgwodoyke_acosmvqwksvfjsq16c0d"
              size="large"
            />
            <div style={{ marginLeft: "10px" }}>
              <Typography>Đại học FPT</Typography>
              <Typography style={{ fontWeight: "initial" }}>
                Chúng tôi sẵn sàng trợ giúp bạn.
              </Typography>
            </div>
          </div>
        }
        visible={visible}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="cardChat mt-5 w-full md:w-1/2 lg:w-1/3">
          <div className="flex   justify-start">
            <img
              src="https://vcdn.subiz-cdn.com/file/firpkaqtviltgwodoyke_acosmvqwksvfjsq16c0d"
              alt="user"
            />
            <div className="chat ml-2 p-3  bg-gray-100 rounded-lg shadow-md">
              Xin chào, Chúng tôi ở đây và sẵn sàng tư vấn. Hãy cho chúng tôi
              biết nhu cầu của bạn!
            </div>
          </div>
          <div className="flex p-3 justify-end ">
            <div className="bg-white mr-2 p-3 rounded-lg shadow-md">
              <span className="text-gray-600">Ok</span>
            </div>
            <img src={person} alt="user" className="w-8 h-8" />
          </div>

          <div className="form-group px-3">
            <textarea
              className="form-control w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Type your message"
            ></textarea>
            <Button>Gửi</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ChatBox;
