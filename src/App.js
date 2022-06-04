import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Layout from './commons/Layout';
import PostDetail from './commons/PostDetail';
import TagPosts from './commons/TagPosts';
import About from './components/About';
import Contact from './components/Contact';
import Works from './components/Works';
import { getPosts } from './slice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<TagPosts />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:tag" element={<TagPosts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
