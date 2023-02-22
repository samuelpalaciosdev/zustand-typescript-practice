import { useEffect } from 'react';
import { useCounterStore } from './store/counterStore';
import { shallow } from 'zustand/shallow';

const App = () => {
  const { count, posts } = useCounterStore(
    state => ({
      count: state.count,
      posts: state.posts,
    }),
    shallow
  );

  const { increment, getPosts } = useCounterStore();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>Hello world</h1>
      <h2>Count is: {count} </h2>
      <button onClick={() => increment(10)}>Increment by 10</button>
      {JSON.stringify(posts)}
    </>
  );
};

export default App;
