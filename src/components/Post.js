import React from "react";

import Comment from "./Comment";

export default function Post({ data }) {
  return (
    <div className="post-box">
      <div className="post-head">
        <img className="post-avatar" src={data.author.avatar} />
        <div className="post-box-info">
          <div className="post-username">{data.author.name}</div>
          <div className="post-date">{data.date}</div>
        </div>
      </div>
      <div className="post-content">{data.content}</div>
      <hr></hr>
      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
}
