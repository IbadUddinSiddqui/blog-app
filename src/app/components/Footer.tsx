import React from 'react'

function Footer() {
  return (
  <>
   {/* Newsletter Section */}
   <section className="bg-indigo-600 py-12 dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 dark:text-gray-200">
            Join Our Community
          </h2>
          <p className="text-lg text-blue-100 mb-6 dark:text-gray-300">
            Subscribe to our newsletter to receive the latest blogs and updates directly in your inbox.
          </p>
          <form className="flex justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-gray-300 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
  </>
)
}

export default Footer