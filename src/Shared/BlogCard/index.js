import React from "react";

const BlogCard = (props) => {
  console.log(props.data);
  return (
    <div className="bg-white cursor-pointer transition-all duration-700 hover:scale-110 p-2">
      <p>{props.data.title}</p>
      <p>{props.data.content}</p>
      <p>{props.data.author}</p>
    </div>
  );
};

export default BlogCard;
