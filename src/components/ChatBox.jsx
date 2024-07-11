import { useState } from "react";
import { Avatar, Button, Modal, Spin, Typography } from "antd";
import "../styles/ChatBox.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import v3 from "../assets/chat.png";
import person from "../assets/person.svg";
import Typewriter from "typewriter-effect";
const ChatBox = () => {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const genAI = new GoogleGenerativeAI(
    "AIzaSyBlXZUUdhBY0maRLFObPZpd_FeA1J_bXgE"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const handleClickSend = async () => {
    setMessages((prev) => [...prev, { text: input, type: "user" }]);
    setInput("");
    setLoading(true);
    const result = await model.generateContent([input]);
    setLoading(false);
    const response = await result.response;
    const text = response.text();
    setMessages((prev) => [...prev, { text: text, type: "ai" }]);
  };

  return (
    <>
      <div className="all-demo fixed top-0 right-[-26rem] bg-orange-700 shadow-lg z-50 transition-all ease-in-out duration-200 hidden lg:inline-block font-merienda ">
        <div
          className="text-black text-xs uppercase py-1.5 px-2.5 font-medium alt-font "
          onClick={showModal}
        >
          <div className="flex items-center justify-center">
            <img
              className="far fa-envelope text-white text-base align-middle relative w-24 "
              src={v3}
              alt="chat icon"
            />
          </div>
        </div>
      </div>

      <Modal
        title={
          <div className="flex  justify-start ">
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
        <div className="cardChat mt-5  w-full md:w-1/2 lg:w-1/3 ">
          <div className="flex   justify-start">
            <img
              src="https://vcdn.subiz-cdn.com/file/firpkaqtviltgwodoyke_acosmvqwksvfjsq16c0d"
              alt="user"
            />
            <div className="chat ml-2 p-3  bg-gray-100 rounded-lg shadow-md">
              Xin chào, tôi là AI của FPT Education. Tôi ở đây và sẵn sàng trả
              lời câu hỏi của bạn.
            </div>
          </div>
          {messages.map((message, index) => {
            if (message?.type === "user") {
              return (
                <div key={index} className=" flex p-3 justify-end ">
                  <div className="bg-white mr-2 p-3 rounded-lg shadow-md">
                    s{message.text}
                  </div>
                  <img src={person} alt="user" className="w-8 h-8" />
                </div>
              );
            }
            return (
              <div key={index} className="flex justify-start">
                <img
                  src="https://vcdn.subiz-cdn.com/file/firpkaqtviltgwodoyke_acosmvqwksvfjsq16c0d"
                  alt="user"
                />
                <p className="chat ml-2 p-3  bg-gray-100 rounded-lg shadow-md type">
                  <Typewriter
                    options={{
                      strings: message.text,
                      autoStart: true,
                      loop: false,
                      delay: 20,
                      devMode: false,
                      skipAddStyles: false,
                      cursor: "",
                      cursorClassName: "cursor",
                    }}
                  />
                </p>
              </div>
            );
          })}
          {loading && (
            <div className="flex justify-start">
              <img
                src="https://vcdn.subiz-cdn.com/file/firpkaqtviltgwodoyke_acosmvqwksvfjsq16c0d"
                alt="user"
              />
              <p className="chat ml-2 p-3  bg-gray-100 rounded-lg shadow-md type">
                <Spin />
              </p>
            </div>
          )}
        </div>
        <div className="form-group px-3">
          <textarea
            className="form-control w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Type your message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          <Button onClick={handleClickSend}>Gửi</Button>
        </div>
      </Modal>
    </>
  );
};

export default ChatBox;
