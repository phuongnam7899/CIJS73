import { memo, useRef, useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);
  const updateCount = (newCount) => {
    setCount(newCount);
  };
  return { count, updateCount };
};

export const Optimization = () => {
  const { count, updateCount } = useCount();
  const inputRef = useRef(null);
  const focusOnInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <input ref={inputRef} />
      <div>{count}</div>
      <img src="https://www.toponseek.com/blogs/wp-content/uploads/2019/06/toi-uu-hinh-anh-optimize-image-4-1200x700.jpg" />
      <button onClick={focusOnInput}>Focus</button>
      <hr />
      <Normal />
      <Memorized />
    </>
  );
};

const Normal = () => {
  const { count, updateCount } = useCount();
  return <div>{count}</div>;
};
const Memorized = memo(Normal);
