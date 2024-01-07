    //useState required when updating element inner values
    //useEffect required when to load default values into element on load.
    import { useEffect, useState} from "react";
    import React from "react";
    import ReactDOM from "react";
    import appRoot from "react";

    //App component contains main function which generates html elemets programatically
    export default function App() {
    let [currentCount, updateCount]= useState("");
    let count = 0;

    //assign function into useEffect method with second argument as empty array.
    useEffect(() => {
      getData();
    }, []);

    async function getData(){
      //for api fetch
      
    }

    function add(){
      count++
      console.log('add button clicked. Current Count at: ' + count);
      
    };

    function remove(){
      //console.log(count-1);
      count = count !== 0 ? count-1 : 0;
      console.log('remove button clicked. Current Count at: ' + count);
    };

    return (
      <div>
        <h1>Counter: {currentCount}</h1>
        <h2>
          <button onClick={add}>Add</button>
        </h2>
        <h2>
          <button onClick={remove}>Remove</button>
        </h2>
      </div>
    );

};