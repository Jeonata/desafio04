import React from "react";

export default function Comment({ data }) {
  return (
    <div className="post-comment">
      <img className="post-comment-avatar" src={data.author.avatar} />
      <div className="post-comment-box">
        <b>{data.author.name}</b> {data.content}
      </div>
      {console.log(data)}
    </div>
  );
}
