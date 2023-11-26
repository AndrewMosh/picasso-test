// App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import PostDetail from './components/PostDetails/PostDetail';
import Header from './components/Header/Header';
const MyLazyPostList = React.lazy(() => import('./components/PostList/PostList'));
const App = () => {
  return (
    <Router>
      <Header />
      <React.Suspense fallback={<div style={{height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Spinner size="xl" color="blue.500" /></div>}>
      <Routes>
        <Route path="/" element={<MyLazyPostList />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
      </React.Suspense>
    </Router>
  );
};

export default App;
