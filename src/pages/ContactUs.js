import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [successMessage, setSuccessMessage] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace this URL with your backend endpoint
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form), 
      });

      if (!response.ok) {
        throw new Error('Failed to send the message');
      }

      const data = await response.json();
      console.log('Response:', data);

      setSuccessMessage('Your message has been sent successfully!');
      setForm({ name: '', email: '', message: '' }); 
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange}  required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email"value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
