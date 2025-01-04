import Link from 'next/link'
import React from 'react'

function Header() {
  // Example state for user authentication (replace with real logic)
  const isAuthenticated = true; // Change this as per your auth logic
  const userProfilePhoto = 'https://via.placeholder.com/40'; // Replace with dynamic user profile photo

  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 py-6">
      <div className="container mx-auto flex items-center justify-between px-6">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            <Link href={"/"}>Blogged</Link>
          </h1>
        </div>

        {/* Navigation Section */}
        <nav className="space-x-6 flex">
          <Link href="/blogs">
            <p className="text-white text-lg font-medium hover:text-gray-200 transition">Blogs</p>
          </Link>
          <Link href="/about">
            <p className="text-white text-lg font-medium hover:text-gray-200 transition">About</p>
          </Link>
          <Link href="/contact">
            <p className="text-white text-lg font-medium hover:text-gray-200 transition">Contact</p>
          </Link>
        </nav>

        {/* User Profile and Sign-In Section */}
        <div className="flex items-center space-x-6">
          {isAuthenticated ? (
            <>
              {/* Profile Photo */}
              <img
                src={userProfilePhoto}
                alt="User Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              {/* Sign Out Button */}
              <button className="text-white text-lg font-medium hover:text-gray-200 transition">
                Sign Out
              </button>
            </>
          ) : (
            <>
              {/* Sign In Button */}
              <Link href="/signin">
                <p className="text-white text-lg font-medium hover:text-gray-200 transition">
                  Sign In
                </p>
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
