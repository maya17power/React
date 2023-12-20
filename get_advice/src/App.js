//useState required when updating element inner values
//useEffect required when to load default values into element on load.
import { useEffect, useState } from "react";

//App component contains main function which generates html elemets programatically
export default function App() {
  //create a new state to update dom element inner values
  //perameter "adv" is the value to be placed in dom element as value
  //perameter "setAdvice" is what wraps the data to be used by "adv" perameter
  //useState perameter is the default string
  const [adv, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  const rn = Math.floor(Math.random() * 100);

  //async function fetches api data in json format.
  //async requires a function to return a promise -( Producing Code & Consuming Code)
  async function getAdvice() {
    //await requires a function to return a promise (Producing Code)
    const response = await fetch("https://api.adviceslip.com/advice/" + rn);
    //await requires a function to return a promise (Consuming Code)
    const rawData = await response.json();
    //example filter: rawData.slip["advice"]
    //example filter: rawData['slip']['advice']
    //example filter: rawData.slip.advice
    //example filter: rawData.slip.id
    //example filter: rawData['slip']['id']
    //example filter: rawData.slip["id"]

    console.log("Random Number:" + rn + ", Slip_ID: " + rawData.slip.id);

    setAdvice(rawData.slip.advice);
    setCount((c) => c + 1);
  }

  //assign function into useEffect method with second argument as empty array.
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{adv}</h1>
      {/* add onClick perameter to button element */}
      <button onClick={getAdvice}>Get Advise</button>
      {/*add 'Message' component tag function name with prop which is variable count value. */}
      <Message count={count} />
    </div>
  );

  //Message component handles messages to end user.
  //props perameter is collected to utilize useState within function.
  function Message(props) {
    return (
      <p>
        You have read <strong>{props.count}</strong> pieces of advice.
      </p>
    );
  }
}
