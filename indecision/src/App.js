//useState required when updating element inner values
//useEffect required when to load default values into element on load.
import { useEffect, useState} from "react";

//App component contains main function which generates html elemets programatically
export default function App() {
  let c = 0;
  let currentCount = useState(c);

  function add1(){
    c++;
    console.log(c);
  };

  async function counter() {

    // currentCount();


  }

  //assign function into useEffect method with second argument as empty array.
  useEffect(() => {
    counter();
  }, []);

  return (
    <div>
        <h1>Count: {currentCount}</h1>
        <button onClick={add1}>+1</button>
        {/* <button onClick={minus1}>-1</button>
        <button onClick={reset}>Reset</button> */}
    </div>
  );

  //Message component handles messages to end user.
  //props perameter is collected to utilize useState within function.
  function Message(props) {
    return (
      <p>
        {/* You have read <strong>{props.count}</strong> pieces of advice. */}
      </p>
    );
  }
}
