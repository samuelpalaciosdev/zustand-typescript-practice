import { useCounterStore } from './store/counterStore';
import { shallow } from 'zustand/shallow';

const App = () => {
  const { count } = useCounterStore();
  const { increment } = useCounterStore();

  console.log(count);

  return (
    <>
      <h1>Hello world</h1>
      <h2>Count is: {count} </h2>
      <button onClick={() => increment(10)}>Increment by 10</button>
    </>
  );
};

export default App;
