import React from 'react'

function Hero() {
  return (
    <>
      {/* Call to Action Section */}
  <div className="text-center  bg-grey-800">
    <h2 className="text-4xl md:text-5xl mt-8 font-bold text-white">
      Stay Updated with Blogged
    </h2>
    <p className="text-lg text-blue-100 mt-4">
      Explore our latest articles, tutorials, and stories from various domains.
    </p>
    <a
      href="/blogs"
      className="inline-block mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow hover:bg-gray-100 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
    >
      Explore Latest Blogs
    </a>
  </div>
    </>
  )
}

export default Hero