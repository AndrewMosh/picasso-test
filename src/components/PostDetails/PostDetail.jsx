// components/PostDetail.js
import React from 'react';
import { useGetPostByIdQuery } from '../../api/api';
import { useParams, Link } from 'react-router-dom';

const PostDetail = () => {
  const { postId } = useParams();
  const { data: post } = useGetPostByIdQuery(postId);

  return (
    <div>
      <p>{post?.id}</p>
      <p>{post?.title}</p>
      <p>{post?.body}</p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default PostDetail;
