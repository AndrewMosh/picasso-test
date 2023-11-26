// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList/PostList';
import PostDetail from './components/PostDetails/PostDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
