import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qnky6zi', // Replace with your EmailJS service ID
        'template_l561g23', // Replace with your EmailJS template ID
        form.current,
        'j9iC1bdZShjHs9GUU' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Message sent successfully:', result.text);
          toast.success('Message sent successfully!'); // Show success toast
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          console.error('Failed to send message:', error.text);
          toast.error('Failed to send message. Please try again later.'); // Show error toast
        }
      );
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Contact Me
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name" // This should match the EmailJS template placeholder
              className="block w-full p-3 mt-1 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email" // This should match the EmailJS template placeholder
              className="block w-full p-3 mt-1 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="user_subject" // This should match the EmailJS template placeholder
              className="block w-full p-3 mt-1 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Subject"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="user_message" // This should match the EmailJS template placeholder
              rows="4"
              className="block w-full p-3 mt-1 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 focus:ring focus:ring-blue-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* ToastContainer to display the notifications */}
      <ToastContainer />
    </section>
  );
}

export default Contact;
