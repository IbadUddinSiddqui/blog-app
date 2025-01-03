import React from 'react';
import client from './sanityClient';
import { urlFor } from './sanityClient';

type Blog = {
  _id: string;
  slug: {
    current: string;
  };
  blogtitle: string;
  thumbnail?: {
    asset?: {
      url?: string;
    };
  };
  blog_desc: string;
  datepublished: string; // ISO date string
};
interface Category {
  name: string;
  slug: string;
  description: string;
  icon?: string; // Optional, since not all categories might have an icon
}

const page = async () => {
  const latestBlogs = await client.fetch(
    `*[_type == "blog"] | order(datepublished desc)[0...3]{
      _id,
      slug,
      blogtitle,
      thumbnail,
      blog_desc,
      datepublished
    }`
  );

  const categories = await client.fetch(
    `*[_type == "categories"] {
      name,
      slug,
      description,
      icon
    }`
  );

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16 text-center dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-white">
            Welcome to Our Blog
          </h1>
          <p className="text-lg text-blue-100 mt-4">
            Stay informed with our latest articles, tutorials, and stories from various domains.
          </p>
          <a
            href="#latest-blogs"
            className="inline-block mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow hover:bg-gray-100 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            Explore Latest Blogs
          </a>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section id="latest-blogs" className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center dark:text-gray-200">
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((blog: Blog) => (
            <article
              key={blog._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:shadow-gray-700"
            >
              
                <img
                  src={urlFor(blog.thumbnail)}
                  alt={blog.blogtitle}
                  className="w-full h-56 object-cover"
                />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-gray-200">
                  {blog.blogtitle}
                </h3>
                <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
                  {new Date(blog.datepublished).toLocaleDateString()}
                </p>
                <p className="text-gray-700 mb-4 line-clamp-3 dark:text-gray-300">
                  {blog.blog_desc}
                </p>
                <a
                  href={`/blogs/${blog.slug.current}`}
                  className="text-indigo-600 hover:underline font-medium dark:text-indigo-400"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-12 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center dark:text-gray-200">
            Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category: Category) => (
              <div
                key={category.slug}
                className="p-6 bg-white shadow rounded-lg dark:bg-gray-700 dark:shadow-gray-600"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {category.name}
                </h3>
                {category.icon && (
                  <img
                    src={urlFor(category.icon)}
                    alt={category.description}
                    className="w-full h-48 object-cover"
                  />
                )}
                <p className="text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center dark:text-gray-200">
            What Our Readers Say
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {[
              {
                text: '"This blog has been a game changer for me. The content is always on point and insightful."',
                author: 'Jane Doe',
              },
              {
                text: '"I love how well-researched and professionally written the articles are. Highly recommended!"',
                author: 'John Smith',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-lg p-6 rounded-lg dark:bg-gray-800 dark:shadow-gray-700"
              >
                <p className="text-gray-700 italic dark:text-gray-300">
                  {testimonial.text}
                </p>
                <h4 className="text-indigo-600 mt-4 font-medium dark:text-indigo-400">
                  - {testimonial.author}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

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
  );
};

export default page;
