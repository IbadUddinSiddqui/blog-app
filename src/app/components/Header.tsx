import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 py-6">
  <div className="container mx-auto flex items-center justify-between px-6">
    {/* Logo Section */}
    <div className="flex items-center">

      <h1 className="text-3xl md:text-4xl font-extrabold text-white">
       <Link href={"/"}> Blogged</Link>
      </h1>
    </div>

    {/* Navigation Section */}
    <nav className="space-x-6">
      <a
        href="/blogs"
        className="text-white text-lg font-medium hover:text-gray-200 transition"
      >
        Blogs
      </a>
      <a
        href="/about"
        className="text-white text-lg font-medium hover:text-gray-200 transition"
      >
        About
      </a>
      <a
        href="/contact"
        className="text-white text-lg font-medium hover:text-gray-200 transition"
      >
        Contact
      </a>
    </nav>
  </div>

  {/* Call to Action Section */}
  <div className="text-center mt-8">
    <h2 className="text-4xl md:text-5xl font-bold text-white">
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
</section>

  )
}

export default Header