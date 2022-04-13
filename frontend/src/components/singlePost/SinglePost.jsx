import "./singlePost.css";

import React from "react";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>SERKAN</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam illo
          at, necessitatibus iste ea tempore, numquam nemo natus pariatur itaque
          nisi provident officiis maxime deserunt quas perferendis omnis nam
          fuga?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
