import React from 'react'

function Contact(){
    return (
      <section id="contact" className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Contact Me
          </h2>
          <form action="#" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full p-3 mt-1 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Message
              </label>
              <textarea
                id="message"
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
      </section>
    );
}

export default Contact