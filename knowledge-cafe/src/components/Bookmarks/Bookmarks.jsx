import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="my-5 py-2 md:py-4 lg:py-6 m-6 p-6 bg-slate-200 rounded  h-min ">
        <h3 className="font-bold text-xl">Reading time: {readTime}</h3>
      </div>
      <div className="py-2 md:py-4 lg:py-6 m-6 p-6  bg-slate-200 rounded  h-min">
        <h1 className="text-xl font-bold">
          Bookmarked Blogs: {bookmarks.length}
        </h1>
        <div>
          {bookmarks.map((bookmark, index) => (
            <Bookmark key={index} bookmark={bookmark} />
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readTime: PropTypes.number,
};

export default Bookmarks;
