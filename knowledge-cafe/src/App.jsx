import { useState } from "react";
import "./App.css";

import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = (blog) => {
    console.log("adding to bookmark");
  };

  return (
    <>
      <div className="container mx-auto max-w-[1200px] w-[90%] lg-w[84%]">
        <Header></Header>
        <div className="md:flex gap-8">
          <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
