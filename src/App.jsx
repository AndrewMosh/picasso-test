// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList/PostList';
import PostDetail from './components/PostDetails/PostDetail';
import Header from './components/Header/Header';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
