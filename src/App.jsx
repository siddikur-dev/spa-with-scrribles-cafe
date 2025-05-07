import Blogs from "./Component/Blogs/Blogs";
import "./App.css";
import { useState } from "react";
function App() {
  const [bookMerk, setBookMerked] = useState([]);
  // Bookmer added props recive from blog.jsx
  const handleBookmerk = (blog) => {
    const remainingBookmerked = [...bookMerk, blog];
    setBookMerked(remainingBookmerked);
  };
  // Bookmark Remove
  const removeBookmark = (id) => {
    const remainingBookmerked = bookMerk.filter((mark) => mark.id !== id);
    setBookMerked(remainingBookmerked);
  };
  // handleReadTime
  const [readTime, setReadTime] = useState(0);
  const handleReadTime = (time) => {
    const remainingTime = readTime + Number(time);
    setReadTime(remainingTime);
  };
  // handle ReadTime Remove


  return (
    <>
      <div className="container  mx-auto flex flex-col lg:flex-row justify-between my-5  gap-5  border-2 p-5 border-amber-950 ">
        <div className=" w-full lg:w-[70%] border  border-amber-950 rounded-2xl p-2">
          <Blogs
            handleBookmerk={handleBookmerk}
            handleReadTime={handleReadTime}
          ></Blogs>
        </div>
        {/* HIstory Aside */}
        <div className=" w-full lg:w-[30%] border rounded-2xl p-3 text-center  ">
          <h3 className="text-xl border  rounded-full  bg-[#ddd]">
            {" "}
            History : {bookMerk.length}
          </h3>
          <h2 className="text-xl border  rounded-full  bg-[#ddd] mt-2">
            ReadTime: {readTime}
          </h2>
          <div className=" rounded-2xl m-2 p-5 bg-[#ddd] ">
            {bookMerk.map((mark) => (
              <div key={mark.id}>
                <p className="text-amber-600 rounded-xl border-2 border-black my-2 p-2 md:p-3 flex justify-between items-center gap-2">
                  <span className="text-sm md:text-base truncate max-w-[70%]">
                    Title: {mark.title}
                  </span>
                  <button
                    onClick={() => removeBookmark(mark.id)}
                    className="text-red-500 cursor-pointer hover:animate-spin text-lg font-bold flex-shrink-0"
                    aria-label="Remove bookmark"
                  >
                    X
                  </button>
                </p>
              </div>
            ))}
          </div>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default App;
