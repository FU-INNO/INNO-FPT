import { useRef } from 'react';
import { Form, Input, Button } from 'antd';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <Form ref={form} layout="vertical" onSubmitCapture={sendEmail}>
      <Form.Item
        label="Name"
        name="user_name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input placeholder="Name" />
      </Form.Item>
      
      <Form.Item
        label="Email"
        name="user_email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' }
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: 'Please enter your message' }]}
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
