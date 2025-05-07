import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmerk, handleReadTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl  mt-5">Blogs: {blogs.length}</h2>
      <div className=" grid grid-cols-1  lg:grid-cols-2">
        {blogs.map((blog) => (
          <Blog
            handleBookmerk={handleBookmerk}
            key={blog.id}
            blog={blog}
            handleReadTime={handleReadTime}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
