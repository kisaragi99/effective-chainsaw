import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostsTable from './components/Table/Table';
import Loader from './components/Loader/Loader';
import { getPosts } from './store/reducer';
import style from './App.module.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const { isLoading, posts, error } = useSelector((state) => state);

  return (
    <main className={style.app}>
      {isLoading && <Loader />}
      {error && (
      <p className={style.error}>
        Error:&nbsp;
        {error}
      </p>
      )}
      <div className={style.table}>
        {posts.length > 0 && <PostsTable posts={posts} />}
      </div>
    </main>
  );
}

export default App;
