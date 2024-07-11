import { useRef } from "react";
import { Form, Input, Button } from "antd";
import emailjs from "@emailjs/browser";
import  { useRef } from 'react';
import { Form, Input, Button } from 'antd';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const formRef = useRef();

  const sendEmail = (values) => {
    console.log('Form Values:', values);

    const templateParams = {
      user_name: values.user_name,
      user_email: values.user_email,
      message: values.message,
    };

    console.log('Template Params:', templateParams);

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
      .then(
        () => {
          console.log("SUCCESS!");
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <Form ref={formRef} layout="vertical" onFinish={sendEmail}>
      <Form.Item
        label="Name"
        name="user_name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input placeholder="Name" />
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
        label="Message"
        name="message"
        rules={[{ required: true, message: "Please enter your message" }]}
      >
        <Input.TextArea rows={5} placeholder="Write your message here..." />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactUs;
