import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import APiCall from "./assets/Components/ApiCall";
import Parent from "./assets/Components/Parent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <APiCall></APiCall>
      {/* <Parent>
        
      </Parent> */}
    </>
  );
}

export default App;
