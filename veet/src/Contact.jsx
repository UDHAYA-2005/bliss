import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import styles for phone input
import axios from "axios"; // Import Axios for API requests
import "./Contact.css"; // Make sure to include this for styling

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle input changes for text and email fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle phone number input changes
  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/contact", formData)
      .then((response) => {
        alert(response.data); // Show success message
        // Clear the form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
      });
  };

  return (
    <div>
      {/* Header Section */}
      <div className="grid-container">
        <div className="content-box">
          <h1>
            Contact <b>Us</b>
          </h1>
        </div>
      </div>

      {/* Contact Form and Address Section */}
      <div className="contact-container">
        {/* Left Box: Contact Form */}
        <div className="left-box">
          <form onSubmit={handleSubmit}>
            {/* First Name and Last Name */}
            <div className="name-row">
              <label htmlFor="firstName">
                First Name*
                <div className="fn">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>
              <label htmlFor="lastName">
                Last Name*
                <div className="fn">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>
            </div>

            {/* Phone Number and Email */}
            <div className="contact-row">
              <label htmlFor="phone" className="ph">
                Phone Number*
                <div className="phone-input">
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </label>
              <label htmlFor="email">
                E-Mail*
                <div className="fn">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>
            </div>

            {/* Message */}
            <div className="message-row">
              <label htmlFor="message">Your Message*</label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
        </div>

        {/* Right Box: Address and Social Media */}
        <div className="right-box">
          <div className="address-section">
            <h3>Address</h3>
            <p>
              <a
                href="https://www.google.com/maps?q=33rd+Street,+GKM+colony,+kolathur,+Chennai-600082,+Tamilnadu"
                target="_blank"
                rel="noopener noreferrer"
              >
                33rd Street, GKM colony, Kolathur, Chennai-600082, Tamilnadu
              </a>
            </p>
            <h3>Phone Number</h3>
            <p>
              <a href="tel:+917358569113">+91 7358569113</a>
            </p>
            <h3>Email</h3>
            <p>
              <a href="mailto:Blissfuloccasions@gmail.com">
                Blissfuloccasions@gmail.com
              </a>
            </p>
          </div>

          <div className="social-media-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="src/assets/img/social 3.png"
                  alt="Facebook"
                  width="30"
                  height="30"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="src/assets/img/social2.png"
                  alt="Twitter"
                  width="40"
                  height="40"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="src/assets/img/social1.png"
                  alt="Instagram"
                  width="30"
                  height="30"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="grid-container1">
        <div className="text-box1">
          <p>“Feel Free to Get in Touch Anytime”</p>
        </div>
        <div className="image-box1">
          <img src="src/assets/img/Group b.png" alt="Contact" />
        </div>
      </div>

      <div className="grid-container2">
        <div className="text-box2">
          <p>Make Your Occasion Extraordinary – Book with Us Today</p>
          <button className="cta-button2">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;