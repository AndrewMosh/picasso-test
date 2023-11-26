import React, { useState, useEffect } from 'react';
import { useGetPostsQuery } from '../../api/api';
import { Link } from 'react-router-dom';

const PostList = () => {
  const { data: posts } = useGetPostsQuery();
  const [visiblePosts, setVisiblePosts] = useState(10); // Начальное количество видимых постов
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
      setLoading(true);
      // Имитация задержки загрузки новых постов (замените этот блок на фактический запрос к API)
      setTimeout(() => {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 10); // Увеличиваем количество видимых постов
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      {posts?.slice(0, visiblePosts).map((post) => (
        <div key={post.id}>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body.slice(0, 100)}...</p>
          <Link to={`/posts/${post.id}`}>
            <button>Bitch</button>
          </Link>
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default PostList;
