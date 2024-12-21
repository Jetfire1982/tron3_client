import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { control, getPrices } from "../../actions/control";
import { RootState, store } from "../../reducers";
import { setAllStatusChange, setServerStartStop, setTest1, setTest2 } from "../../reducers/statusReducer";
import { setAuth } from "../../reducers/testReducer";
import CardPair, { Prices } from "../card/CardPair";
import "./Page1.css"
import initialPrices from "../../data/initial";

const Page1 = () => {
  const isAuth = useSelector<RootState>((state) => state.test.isAuth);
  const[prices, setPrices] = useState(initialPrices)


  let [tes, setTes] = useState(false)
  useEffect(()=>{
    console.log('-------------------------------------------HERE-----------------------------------')
    let timer_1 = setInterval(()=>{
      console.log('TICK')  
      getPrices("/getprices").then(ans=>{console.log("ans = ",ans); setPrices(ans)})
    },5000)
    return ()=>{
      console.log('CLEAR INTERVAL') 
      clearInterval(timer_1)
    }
  })
  const server_start_stop = useSelector<RootState>((state) => state.status.server_start_stop) as boolean; 
  const test1 = useSelector<RootState>((state) => state.status.test1) as boolean;
  const test2 = useSelector<RootState>((state) => state.status.test2) as boolean; 


  console.log("render,  server_start_stop = ",server_start_stop, " test1 =", test1 )

  let t: string = "true";
  let exit = () => {
    console.log("exit");
    localStorage.removeItem('token');
    store.dispatch(setAuth(false));
  }

  let testCheckBoxA = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("data =",e.target.dataset.control)
    console.log("checked =",e.target.checked)
    // control("/control", e.target.dataset.control, e.target.checked)
    // setTes(!tes)
    control("/control", e.target.dataset.control, e.target.checked)
    switch (e.target.dataset.control) {
      case "server_start_stop":
        console.log("CASE server_start_stop")  
        store.dispatch(setServerStartStop(!server_start_stop))
        break;
      case "test1":
        console.log("CASE test1")
        store.dispatch(setTest1(!test1));
        break; 
      case "test2":
        console.log("CASE test2")
        store.dispatch(setTest2(!test2))
        break;
    }
  }

  let testCheckBoxB = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("checked B =",e.target.checked)
  }

  let testCheckBoxC = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("checked C =",e.target.checked)
  }

  let testForm = (e:React.FormEvent<HTMLFormElement>) => {
    console.log("checked Form e = ",e)
  }

  let ttes = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    getPrices("/getprices").then(ans=>{console.log("ans = ",ans); setPrices(ans)})
  }

  let ttes1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("data =",e.target.dataset.control)
    console.log("checked =",e.target.checked)
    store.dispatch(setServerStartStop(!server_start_stop))
  
  }

  let ttes2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("data =",e.target.dataset.control)
    console.log("checked =",e.target.checked)
    store.dispatch(setTest1(!test1))
  }
 

  
  let pairs: Array<keyof Prices> = ["AUDCAD","AUDCHF","AUDJPY","AUDNZD","AUDUSD","CADCHF","CADJPY","CHFJPY","EURAUD","EURCAD","EURCHF","EURGBP","EURJPY","EURNZD","EURUSD","GBPAUD","GBPCAD","GBPCHF","GBPJPY","GBPNZD","GBPUSD","NZDCAD","NZDCHF","NZDJPY","NZDUSD","USDCAD","USDCHF","USDJPY"]
  
  return (
    <>
      <div className="uk-flex  uk-flex-wrap uk-flex-left  card-all-my" style={{border: '1px solid red'}}>
        {pairs.map((el)=><CardPair namePair={el} prices={prices}/>)}
      </div>
      <button className="uk-button uk-button-secondary uk-margin-small-left uk-margin-small-top" onClick={exit} >Log out</button>
      <button className="uk-button uk-button-primary uk-margin-small-left uk-margin-small-top">Start/Stop server</button>
      <button className="uk-button uk-button-primary uk-margin-small-left uk-margin-small-top" onClick={ttes}>Test</button>
     
      {/* <form onChange={testForm}> */}
      <form> 
        <fieldset className="uk-fieldset">
          <legend className="uk-legend">Control Legend</legend>
          <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label><input className="uk-checkbox" type="checkbox" onChange={testCheckBoxA}  data-control="server_start_stop" checked={server_start_stop}/>A</label>
            <label><input className="uk-checkbox" type="checkbox" onChange={testCheckBoxA}  data-control="test1" checked={test1}/>B</label>
            <label><input className="uk-checkbox" type="checkbox" onChange={testCheckBoxA}  data-control="test2" checked={test2} />C</label>
            {/* checked={test2} */}
            {/* onChange={testCheckBoxA} */}
          </div>
        </fieldset>
      </form>
      
    </>
  );
};

export default Page1;
