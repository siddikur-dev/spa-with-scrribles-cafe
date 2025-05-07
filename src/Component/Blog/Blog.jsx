import React, { useState } from "react";

const Blog = ({ blog, handleBookmerk, handleReadTime }) => {
  const {
    cover_photo,
    title,
    author_name,
    posted_date,
    description,
    hashtags,
    author_img,
    readTime,
  } = blog;

  //   BookMark Button Disabled
  const [isDisabled, setIsDisabled] = useState(true);
  const handleDisabled = () => {
    setIsDisabled(false);
    handleBookmerk(blog);
    handleReadTime(readTime);
  };
  return (
    <div>
      <div className="m-5 flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
        <div className="flex space-x-4">
          <img
            alt=""
            src={author_img}
            className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {author_name}
            </a>
            <span className="text-xs text-gray-600">4 hours ago</span>
          </div>
        </div>
        <div>
          <img
            src={cover_photo}
            alt=""
            className=" rounded-2xl w-full mb-4 h-60 sm:h-96 bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <p className="text-sm"> Post Date:{posted_date}</p>
            <button
              onClick={handleDisabled}
              aria-label="Bookmark this post "
              type="button"
              className="p-2 cursor-pointer btn animate-bounce"
            >
              {isDisabled && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-12 h-8   fill-current text-sky-600"
                >
                  <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                </svg>
              )}
            </button>
          </div>
          <div className="flex space-x-2 text-sm text-gray-600">{hashtags}</div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
