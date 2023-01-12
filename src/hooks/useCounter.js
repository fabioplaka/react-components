import { useEffect, useState } from "react";

const useCounter = (initialCounter) => {
  const [count, setCount] = useState(initialCounter);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount((prevState) => (prevState += 1));
  };

  return {
    count,
    increment,
  };
};

export default useCounter;
