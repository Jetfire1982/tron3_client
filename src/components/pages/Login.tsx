import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth, login } from "../../actions/user";
import { RootState, store } from "../../reducers";
import GotService from "../../service/gotService";
import "./Spinner.css"

// import { test1 } from "../../actions/control";


import { setUser } from '../../reducers/testReducer'

const gotService = new GotService();

interface LoginProps {
  setAuthorization: React.Dispatch<React.SetStateAction<boolean>>
}


const Login =  ({setAuthorization}: LoginProps) => {

  let [pas, setPas] = useState('')
  // const currentUser = useSelector<RootState>((state) => state.user.currentUser); 
  const loading = useSelector<RootState>((state) => state.test.loading); 


  useEffect(() => {
    console.log("I am useEffect")
  }, []);


let changePas = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPas(e.target.value)  
}

let resetInput = () => {
  setPas("")  
}


  // let send= async (e:any)=>{
  //   e.preventDefault();

  //   console.log("click e=",e.clientX)

  //   let res = await gotService.postResource('/password', pas)
  //   console.log("ans = ", res)
  // }



  // let change = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("e = ",e.target.value)
    
  //   setValue(e.target.value)
  //   // let answer = gotService.getTest
  // }

  let send4 = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("send4")
    let res = await gotService.getTest4()
    //  setMessage1(res);
  }

  let send5 = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("send5")
    let res = await gotService.getTest5()
    //  setMessage1(res);
  }

  let send6 = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, pas1: string, url: string) => {
    e.preventDefault();
       const res1 = await fetch(`http://localhost:3000${url}`,{
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${pas1}`
      }
  })
  let res2 = await res1.json()
  console.log("res2 = ",res2)
  }

  let test = ()=>{
    console.log("Working! test1")
    // test1('/test1')
   
    // UIkit.notification('My message');
    // if(currentUser === "Petr"){
    //   store.dispatch(setUser("Vasya"))
    // }else{
    //   store.dispatch(setUser("Petr"))
    // }
    
  }

  let test2 = ()=>{
    console.log("Working! test2")
    // if(currentUser === "Petr"){
    //   store.dispatch(setUser("Vasya"))
    // }else{
    //   store.dispatch(setUser("Petr"))
    // }
    
  }


  console.log("render Login")
  return (
    <div className="uk-flex  uk-flex-center uk-width-1-1"  style={{ border: "3px solid red", height: "80vh"}}>
     {
      loading ?  <span className="uk-position-center" uk-spinner="ratio: 4.5"></span> : undefined
     }
      <div
        className="uk-flex uk-flex-center uk-flex-middle uk-flex-column uk-width-1-1"
        style={{ border: "1px solid blue" }}
      >
          
        <form>
        
          <input
            className="uk-input"
            type="text"
            placeholder="Enter the password"
            value = {pas}
            onChange={(e)=>changePas(e)}
          />
          <button className="uk-button uk-button-primary   uk-align-center" onClick={(e)=>{login(e, pas, '/login', setAuthorization); resetInput()}}>
            Send
          </button>
          {/* <button className="uk-button uk-button-primary" style={{ marginRight: "200px" }} onClick={e=>send4(e)}>
            Start
          </button>
          <button className="uk-button uk-button-primary " onClick={e=>send5(e)}>
            Stop
          </button>
          <button className="uk-button uk-button-primary " onClick={e=>auth(e, '/auth')}>
            Send6
          </button> */}
        </form>
        <button className="uk-button uk-button-primary " onClick={()=>{test();}}>
            Test
          </button> 
      </div>
      
    </div>
  );
};

export default Login;
