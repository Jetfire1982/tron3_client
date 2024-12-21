import { setUser } from '../reducers/userReducer.ts'
import { store } from '../reducers';



export const login = async (e, password, url) => {
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
            const res1 = await fetch(`http://localhost:3000${url}`,{
                method: 'POST',
                body: JSON.stringify({password: password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let res2 = await res1.json()
            console.log("res2 = ",res2)
           
            store.dispatch(setUser(res2.message)) //закидываем пользователя в state
            //теперь нам необходимо хранить где-то токен полученынный от сервера и хранить так чтобы мы могли получить
            //его даже после того как закроем браузер и для этой задачи подходит локальное хранилище

            //!!! localStorage.setItem('token', response.data.token)



        } catch (e) {
            //!!! dispatch(hideLoader())
            if (!e.res2) {
                alert(`Something went wrong! Check your internet connection!`)
            } else { 
                alert(`${e.response.data.message}`) //т.е. при возникновении ошибки мы получим сообщение с ошибкой полученное от сервера т.е. она нампример сработает если мы введем данные которые уже есть на сервере
            }
        } finally {
            //т.е. по завершению всего независимо от того произошла ошибка или нет нам необходимо 
            //скрыть лоудер:
            //!!! dispatch(hideLoader())
        }
    // }
}
