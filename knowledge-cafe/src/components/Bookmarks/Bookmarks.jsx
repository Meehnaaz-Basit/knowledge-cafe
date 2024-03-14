import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="py-2 md:py-4 lg:py-6 m-6 p-6 md:w-1/3 bg-slate-200 rounded  h-min">
      <h1 className="text-xl font-bold">
        Bookmarked Blogs: {bookmarks.length}
      </h1>
      <div>
        {bookmarks.map((bookmark, index) => (
          <Bookmark key={index} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
