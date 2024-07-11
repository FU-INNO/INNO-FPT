import { Collapse } from 'antd';
import imageFpt from '../assets/fpt.jpg'
import ContactForm from './Contact'
import "../styles/Question.css";


const FAQComponent = () => {
  const items = [
    {
      key: '1',
      label: 'What is Topic Listing?',
      children: (
        <p>
          Topic Listing is a free Bootstrap 5 CSS template. You are not allowed to redistribute this template on any other template collection website without our permission. Please contact TemplateMo for more detail. Thank you.
        </p>
      ),
    },
    {
      key: '2',
      label: 'How to find a topic?',
      children: (
        <p>
          Detailed information on how to find a topic.
        </p>
      ),
    },
    {
      key: '3',
      label: 'Does it need to be paid?',
      children: (
        <p>
          Information regarding payment requirements.
        </p>
      ),
    },
  ];
  return (
    <div className="faq-container">
    <div className="faq-header">
      <h2>Frequently Asked Questions</h2>
      <img src={imageFpt} alt="FAQ" className="faq-image" />
    </div>
    <div className="faq-body">
    <Collapse items={items} className="faq-collapse" />
    <ContactForm/>
    </div>
    
  </div>
  );

};

export default FAQComponent;