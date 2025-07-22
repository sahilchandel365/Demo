

// Footer.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faPinterestP,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';



import './Footer.css';
import React, { useState } from 'react';
import { Button, Modal, Form, Input, Space, message } from 'antd';
import axios from 'axios';

const Footer = () => {
    const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState("Welcome to Growthzi – Let’s Book Your Appointment!");
  const [editedText, setEditedText] = useState(text);
  const [ctaButtons, setCtaButtons] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // Save edited text and send POST to backend
  const handleSave = async () => {
    try {
      await axios.post("http://localhost:5000/update-section", {
        component: "FeatureSection",
        field: "mainText",
        value: editedText,
      });
      setText(editedText);
      setEditMode(false);
      message.success("Edit saved and logged to backend.");
    } catch (error) {
      console.error("API Error:", error);
      message.error("Error saving edit.");
    }
  };

  // Add CTA button
  const onFinish = (values) => {
    const { buttonText, url } = values;
    const newButton = { text: buttonText, url };
    setCtaButtons([...ctaButtons, newButton]);
    setModalOpen(false);
    message.success("Button added!");
  };
  return (
    <>
    <div style={{ padding: '30px', background: '#fff', border: '1px solid #eee', maxWidth: '700px', margin: '40px auto' }}>
      <h2>Section with Functionalities</h2>

      {/* Editable Section */}
      <div style={{ marginBottom: '20px' }}>
        {editMode ? (
          <Space direction="vertical" style={{ width: '100%' }}>
            <Input.TextArea
              rows={2}
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <Button type="primary" onClick={handleSave}>
              Save
            </Button>
          </Space>
        ) : (
          <>
            <p style={{ fontSize: '18px', color: '#333' }}>{text}</p>
            <Button type="link" onClick={() => setEditMode(true)}>✏ Edit Text</Button>
          </>
        )}
      </div>

      {/* CTA Buttons */}
      <div style={{ marginBottom: '20px' }}>
        {ctaButtons.map((btn, i) => (
          <Button
            key={i}
            type="primary"
            href={btn.url}
            target="_blank"
            style={{ marginRight: '10px', marginBottom: '10px' }}
          >
            {btn.text}
          </Button>
        ))}
      </div>

      {/* Add Button */}
      <Button type="dashed" onClick={() => setModalOpen(true)}>
        ➕ Add Button
      </Button>

      {/* Modal */}
      <Modal
        title="Add Call-to-Action Button"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Button Text"
            name="buttonText"
            rules={[{ required: true, message: 'Please enter button text' }]}
          >
            <Input placeholder="e.g., Book Now" />
          </Form.Item>
          <Form.Item
            label="Button URL/Action"
            name="url"
            rules={[{ required: true, message: 'Please enter a valid URL or tel: number' }]}
          >
            <Input placeholder="e.g., https://yoursite.com or tel:1234567890" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Add</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="logo">IMPERIAL <span>GRAND HOTEL</span></h2>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          


   
  
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICE</li>
            <li>ROOM</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>SUBSCRIBE</h4>
          <p>Don't miss to subscribe our news,<br /> kindly fill the form below</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Your Email Here" />
            <button>{'>'}</button>
          </div>
        </div>
      </div>
       <div className="social-icons">
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faYoutube} />
      <FontAwesomeIcon icon={faPinterestP} />
      <FontAwesomeIcon icon={faInstagram} />
    </div>
      <div className="footer-bottom">
        <p>© 2025 Imperial Grand Hotel. All Rights Reserved.</p>
        <div className="policy-links">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;