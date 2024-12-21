import { setAuth, setLoading } from '../reducers/testReducer.ts'
import { setAllStatusChange } from '../reducers/statusReducer';
import { store } from '../reducers';
import UIkit from "uikit";



export const login = async (e, password, url, setAuthorization) => {
    e.preventDefault();
 
    //тут нам уже понадобится dispatch из Redux поскольку мы будем сохранять данные о пользоваетеле в состоянии, 
    //а также укажем что пользователь залогинин.
    //Поскольку запрос на сервер это асинхронная ф-ия нам понадобится Redux-Thunk, который подразумевает что экшен будет
    //возвращать новую ф-ию, параметром мы передаем dispatch
    // return async dispatch => {
        try {
            //!!! dispatch(showLoader())
            // const response = await axios.post(`${API_URL}api/auth/login`,
            //     {
            //         email,
            //         password
            //     })
            store.dispatch(setLoading(true))
            const res1 = await fetch(`http://localhost:3000${url}`,{
                method: 'POST',
                body: JSON.stringify({password: password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let res2 = await res1.json()
            res2 = JSON.parse(res2)
            // let token = JSON.parse(res2).token
            // console.log("token =",token)
            console.log("res2 =",res2)
            store.dispatch(setLoading(false))
            if(res2.permission.permission){
                console.log("here")
                store.dispatch(setAuth(res2.permission))
                store.dispatch(setAllStatusChange(res2.status))
                localStorage.setItem('token', res2.permission.token)
            //     setAuthorization(true)
            }else{
                UIkit.notification({
                    message:'Wrong password!',
                    status: 'danger',
                    pos: "top-center",
                    timeout: 5000
                }); 
            }
            
   
          
           
            // store.dispatch(setUser(res2.message)) //закидываем пользователя в state
            //теперь нам необходимо хранить где-то токен полученынный от сервера и хранить так чтобы мы могли получить
            //его даже после того как закроем браузер и для этой задачи подходит локальное хранилище

            //!!! localStorage.setItem('token', response.data.token)



        } catch (e) {
            store.dispatch(setLoading(false))
            //!!! dispatch(hideLoader())
            // if (!e.res2) {
            //     console.log("e = ",e)
                alert(`Something went wrong! Check your internet connection!`)
            // } else { 
            //     alert(`${e.response.data.message}`) //т.е. при возникновении ошибки мы получим сообщение с ошибкой полученное от сервера т.е. она нампример сработает если мы введем данные которые уже есть на сервере
            // }
        } finally {
            
            //т.е. по завершению всего независимо от того произошла ошибка или нет нам необходимо 
            //скрыть лоудер:
            //!!! dispatch(hideLoader())
        }
    // }
}




export const auth = async (url) => {


  try {
    //!!! dispatch(showLoader())
    // const response = await axios.post(`${API_URL}api/auth/login`,
    //     {
    //         email,
    //         password
    //     })
    const res1 = await fetch(`http://localhost:3000${url}`,{
        method: 'GET',
        
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    let res2 = await res1.json()
    console.log("!res2 = ",res2)
    return res2
    // console.log("res2 = ",res2)
   
    // store.dispatch(setUser(res2.message)) //закидываем пользователя в state
    //теперь нам необходимо хранить где-то токен полученынный от сервера и хранить так чтобы мы могли получить
    //его даже после того как закроем браузер и для этой задачи подходит локальное хранилище

    //!!! localStorage.setItem('token', response.data.token)



} catch (e) {
    //!!! dispatch(hideLoader())
    // if (!e.res2) {
        console.log("e =",e)
        alert(`Something went wrong! Check your internet connection!`)
    // } else { 
    //     alert(`${e.response.data.message}`) //т.е. при возникновении ошибки мы получим сообщение с ошибкой полученное от сервера т.е. она нампример сработает если мы введем данные которые уже есть на сервере
    // }
} finally {
    //т.е. по завершению всего независимо от того произошла ошибка или нет нам необходимо 
    //скрыть лоудер:
    //!!! dispatch(hideLoader())
}




  }