"use client";
import React, { useEffect, useState } from "react";
import { urlFor } from "../sanityClient";
import client from "../sanityClient";
import Link from "next/link";
interface Blog {
    _id: string;
    slug: {
      current: string;
    };
    blogtitle: string;
    thumbnail: string; 
    datepublished: string;
  }
  
const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "blog"]{
          _id,
          slug,
          blogtitle,
          thumbnail,
          datepublished
        }`
      )
      .then((data) => setBlogs(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Explore Our Blogs
          </h1>
          <p className="text-lg text-blue-100 mt-4">
            Dive into a collection of articles on various topics.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Blog Thumbnail */}
              {blog.thumbnail && (
                <div className="relative">
                  <img
                    src={urlFor(blog.thumbnail)}
                    alt={blog.blogtitle}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                </div>
              )}

              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 hover:text-blue-600 transition">
                  {blog.blogtitle}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Published on {new Date(blog.datepublished).toLocaleDateString()}
                </p>
                <Link href={`/blogs/${blog.slug.current}`}>
                  <p className="inline-block bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                    Read More
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-gray-400 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Blogs;
