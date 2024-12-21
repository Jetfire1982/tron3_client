// import React from 'react';
import logo from "./logo.svg";
import "./App.scss";
import { useSelector } from "react-redux";
import { RootState, store } from "../../reducers";
import React, { useEffect, useState } from "react";
import GotService from "../../service/gotService";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import Login from "../pages/Login";
import { auth } from "../../actions/user";
import { setAuth } from "../../reducers/testReducer";
import {setAllStatusChange} from "../../reducers/statusReducer"

const gotService = new GotService();

function App1() {
  //   const [x, setValue] = useState("Petr")
  //   const[message1, setMessage1] = useState("")

  //   console.log("epta");
  const name = useSelector<RootState>((state) => state.test.currentUser);
  const isAuth = useSelector<RootState>((state) => state.test.isAuth);
 

  const [isAuthorization, setAuthorization] = useState(false);
  const [test, setTest] = useState(9);
  const [test2, setTest2] = useState(1);


  useEffect(() => {
    console.log("I am useEffect");
    auth("/auth").then((res) => {
      console.log("res type = ", res);
      if (res?.permission?.permission) {
        console.log("Yes");
        store.dispatch(setAuth(res.permission.permission))
        store.dispatch(setAllStatusChange(res.status))
        // setAuthorization(JSON.parse(res).permission)
      }
    })
   
  }, []);
  //   let change = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log("e = ",e.target.value)

  //     setValue(e.target.value)
  //     // let answer = gotService.getTest
  //   }

  //   let send = async () => {
  //     console.log("send")
  //     // gotService.getTest1()
  //     let res = await gotService.getTest1()
  //     // console.log("ans = ", res)
  //   }

  //   let send2 = async () => {
  //     console.log("send2")
  //     let res = await gotService.getTest2()
  //     // console.log("ans = ", res)

  //   }

  //   let send3 = () => {
  //     console.log("send3")
  //     gotService.getTest3()
  //   }

  //   let send4 = async() => {
  //     console.log("send4")
  //     let res = await gotService.getTest4()
  //      setMessage1(res);
  //   }

  //   let send5 = async() => {
  //     console.log("send5")
  //     let res = await gotService.getTest5()
  //      setMessage1(res);
  //   }

  console.log("render App1, isAuth = ",isAuth );

  return (
    <>
      {/* <ul>
              <li><Link to="/">page 1</Link></li>
              <li><Link to="/page2">page 2</Link></li>
              <li> <Link to="/page3">page 3</Link></li>
            </ul> */}
      <div
        className="App  uk-container-expand uk-height-viewport "
        style={{ border: "10px solid green" }}
      >

      
      
        {/* <div className="App uk-flex uk-flex-center uk-container-expand uk-height-viewport"  style={{border: "10px solid green"}}> */}
        {/* <h1>Hello</h1> */}

        {/* <BrowserRouter> */}
        {/* <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes> */}
   
        {!isAuth ? <Navigate to="/login" replace={true} />:<Navigate to="/page1" replace={true} />}
        {/* {isAuth && <Navigate to="/page1" replace={true} />} */}

        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2  t={test} setTest={setTest}/>} />
          <Route path="/" element={<Page3 />} />

          {!isAuth && <Route path="/login" element={<Login setAuthorization={setAuthorization}/>} />}
        </Routes>

        {/* )} */}
        {/* </BrowserRouter> */}

        {/* <li>
          <Link to="/page2">Page 2</Link>
        </li>
        <li>
          <Link to="/page3">Page 3</Link>
        </li> */}
       
      </div>
    </>
  );
}

export default App1;
