import { useEffect, useState } from "react";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="container mx-auto max-w-[1200px] w-[90%] lg-w[84%] py-2 md:py-4 lg:py-6"></div>
  );
};

export default Blog;
