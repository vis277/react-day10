import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("My name is Vishal Kumar");
  return (
    <>
      <p>{message}</p>
      <Child changeMessage={(param) => setMessage(param)}></Child>
    </>
  );
};

export default Parent;
