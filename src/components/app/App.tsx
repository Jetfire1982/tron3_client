// import React from 'react';
import logo from "./logo.svg";
import "./App.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import React, { useState } from "react";

function App() {

  const [x, setValue] = useState("Petr")


  const state = useSelector<RootState>((state) => state.test.currentUser);

  console.log("state = ", state);

  let change = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e = ",e.target.value)
    setValue(e.target.value)
  }

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
    </div>
  );
}

export default App;
