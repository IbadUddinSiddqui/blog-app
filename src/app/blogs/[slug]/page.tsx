import { notFound } from "next/navigation";
import client from "@/app/sanityClient";
import { urlFor } from "@/app/sanityClient";
import { marked } from "marked";
import ReactMarkdown from "react-markdown"; // Import react-markdown
import remarkGfm from "remark-gfm"; // Optional: for GitHub Flavored Markdown (tables, task lists, etc.)
interface GalleryImage {
    _key: string;
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  }
  
interface BlogDetailsProps {
    params: Promise<{ slug: string }
    >
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const BlogDetails = async ({ params }: BlogDetailsProps) => {
  const { slug } = await  params;

  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      blogtitle,
      datepublished,
      author-> { name },
      thumbnail,
      content,
      gallery,
      blog_desc,
      

    }`,
    { slug }
  );

  if (!blog) {
    notFound(); // This will show the 404 page if no blog is found
  }

  const contentHtml = marked(blog.content);
console.log(contentHtml)
  return (
    <div className="container mx-auto px-6 py-10 bg-gray-50 text-gray-900">
      {/* Title and Date */}
      <div className="mb-8 text-center">
        <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">{blog.blogtitle}</h1>
        <p className="text-base sm:text-lg text-gray-500">
          {new Date(blog.datepublished).toLocaleDateString()} | By{" "}
          <span className="font-semibold text-gray-700">{blog.author.name}</span>
        </p></div>
        
      </div>

      {/* Main Image */}
      <div className="w-full sm:w-[60vw] mx-auto mb-8">
        <img
          src={urlFor(blog.thumbnail)}
          alt={blog.blogtitle}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Gallery */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {blog.gallery && blog.gallery.map((image : GalleryImage, index: number) => (
          <div key={index} className="w-full sm:w-[30vw] md:w-[22vw] lg:w-[18vw] xl:w-[15vw]">
            <img
              src={urlFor(image)}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            />
          </div>
        ))}
      </div>

      {/* Blog Content */}
      <div className="prose max-w-none lg:prose-lg prose-h1:text-[40px] mx-auto">
        <div>{blog.blog_desc}</div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
        >
          {blog.content}
        </ReactMarkdown>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-gray-600">
        <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Your Blog Name</p>
      </div>
    </div>
  );
};

export default BlogDetails;
