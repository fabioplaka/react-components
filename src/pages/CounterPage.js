import useCounter from "../hooks/useCounter";
import Button from "../components/Button";

const CounterPage = ({ initialCounter }) => {
  const { count, increment } = useCounter(initialCounter);

  return (
    <div>
      <h1> Count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

export default CounterPage;
