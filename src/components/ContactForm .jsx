import React, { useState } from 'react';

const ContactForm = () => {
  // State to handle form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for error messages
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle the successful submission logic here (e.g., send data to an API)

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({}); // Clear error messages
      alert('Email sent successfully!');
    }
  };

  return (
    <div className="py-16 px-10 bg-gray-50">
      <div className="max-w-4xl mx-auto py-5">
        <div className="text-center mb-3 pb-3">
          <h6 className="text-primary uppercase mb-1" style={{ letterSpacing: '5px' }}>Contact</h6>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Contact For Any Query</h1>
        </div>
        <div className="flex justify-center">
          <div className="w-full">
            <div className="bg-white p-8 shadow-md rounded-lg">
              <form name="sentMessage" id="contactForm" noValidate onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      className={`w-full p-4 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none`}
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      className={`w-full p-4 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none`}
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                </div>
                <div className="mt-6">
                  <input
                    type="text"
                    className={`w-full p-4 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none`}
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                </div>
                <div className="mt-6">
                  <textarea
                    className={`w-full p-4 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none`}
                    rows="5"
                    id="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-primary text-white py-3 px-6 rounded-lg"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
