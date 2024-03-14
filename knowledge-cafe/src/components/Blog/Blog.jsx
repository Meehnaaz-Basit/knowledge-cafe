import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleAddToBookmarks, handleReadTime }) => {
  const {
    id,
    cover,
    title,
    author,
    author_img,
    posted_date,
    hashtags,
    reading_time,
  } = blog;
  return (
    <div className="mb-20 space-y-5">
      <img className="w-full rounded-lg" src={cover} alt="" />
      {/* author container */}
      <div className="flex items-center justify-between">
        {/* left */}
        <div className="flex items-center">
          <div>
            <img className="w-16" src={author_img} alt="" />
          </div>
          <div className="ml-8">
            <p className="font-bold text-xl">{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmarks(blog)} className="ml-3">
            <FaRegBookmark />
          </button>
        </div>
      </div>
      {/* end container */}
      <h1 className="font-bold text-3xl">{title}</h1>
      <div>
        {hashtags.map((hash, ind) => (
          <span key={ind}>
            <a className="mr-3" href="#">
              #{hash}
            </a>
          </span>
        ))}
      </div>
      <button
        onClick={() => handleReadTime(id, reading_time)}
        className="text-blue-600 underline"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func,
  handleReadTime: PropTypes.func,
};

export default Blog;
