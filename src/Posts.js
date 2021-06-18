import React from "react";

const Posts = (props) => {
  return (
    <div>
      {props.posts.map((item) => (
        <li key={item.id}>{item.body}</li>
      ))}
    </div>
  );
};

export default Posts;
