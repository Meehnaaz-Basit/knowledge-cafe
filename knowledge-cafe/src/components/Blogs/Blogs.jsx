import { useEffect, useState } from "react";
import Blog from "./../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({ handleAddToBookmarks, handleReadTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="py-2 md:py-4 lg:py-6 md:w-2/3">
      <h1>blogs: {blogs.length}</h1>
      {blogs.map((eachBlog) => (
        <Blog
          key={eachBlog.id}
          blog={eachBlog}
          handleAddToBookmarks={handleAddToBookmarks}
          handleReadTime={handleReadTime}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmarks: PropTypes.func,
  handleReadTime: PropTypes.func,
};

export default Blogs;
