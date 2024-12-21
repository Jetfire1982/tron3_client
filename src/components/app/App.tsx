// import React from 'react';
import logo from "./logo.svg";
import "./App.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import React, { useState } from "react";
import GotService from "../../service/gotService";


const gotService = new GotService();


function App() {

  const [x, setValue] = useState("Petr")
  const[message1, setMessage1] = useState("")


  console.log("epta");
  const name = useSelector<RootState>((state) => state.test.currentUser);

 

  let change = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e = ",e.target.value)
    
    setValue(e.target.value)
    // let answer = gotService.getTest
  }

  let send = async () => {
    console.log("send")
    // gotService.getTest1()  
    let res = await gotService.getTest1()
    // console.log("ans = ", res)
  }

  let send2 = async () => {
    console.log("send2")
    let res = await gotService.getTest2()
    // console.log("ans = ", res)
    
  }

  let send3 = () => {
    console.log("send3")
    gotService.getTest3()
  }

  let send4 = async() => {
    console.log("send4")
    let res = await gotService.getTest4()
     setMessage1(res);
  }

  let send5 = async() => {
    console.log("send5")
    let res = await gotService.getTest5()
     setMessage1(res);
  }

  console.log("render")
  return (
    <div className="App">
      <h1 className="test">Hello</h1>
      <button className="uk-button uk-button-default">Default</button>

      <form>
        <fieldset className="uk-fieldset uk-margin-left uk-margin-right">
          <legend className="uk-legend">Legend</legend>
          <div className="uk-margin ">
            <input
              className="uk-input"
              type="text"
              placeholder="Enter something"
              aria-label="Input"
              onChange={e=>change(e)}
              value={x}
            />
          </div>
        </fieldset>
      </form>

      <p uk-margin>
    
    <button className="uk-button uk-button-primary" onClick={send}>Primary</button>
    <button className="uk-button uk-button-secondary" onClick={send2}>Secondary</button>
    <button className="uk-button uk-button-danger" onClick={send3}>Danger</button>
    <p>------------------------</p>
    <button className="uk-button uk-button-primary" onClick={send4}>Start</button>
    <button className="uk-button uk-button-primary" onClick={send5}>Stop</button>
    <h3>Answer = {message1}</h3>
   
</p>



    </div>
  );
}

export default App;
