import { useRef } from "react";
import { Form, Input, Button } from "antd";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formRef = useRef();

  const sendEmail = (values) => {
    console.log("Form Values:", values);

    const templateParams = {
      user_name: values.user_name,
      user_email: values.user_email,
      message: values.message,
    };

    console.log("Template Params:", templateParams);

    emailjs
      .send(
        "service_w8ayrhz",
        "template_op0z0uw",
        templateParams,
        "349V1zqbpVQ4sA3k2"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <Form ref={formRef} layout="vertical" onFinish={sendEmail}>
      <Form.Item
        label="Tên"
        name="user_name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input placeholder="Tên" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="user_email"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Please enter a valid email" },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        label="Lời nhắn"
        name="Lời nhắn"
        rules={[{ required: true, message: "Nhập lời nhắn" }]}
      >
        <Input.TextArea rows={5} placeholder="Viết lời nhắn của bạn đây..." />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Gửi
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ContactUs;
