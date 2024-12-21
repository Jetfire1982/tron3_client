


export const control = async (url, key, value) => {
   
    
  
        try {
        
            // console.log("url =",`http://localhost:3000${url}`)
            // const res1 = await fetch(`http://localhost:3000${url}`)

            const res1 = await fetch(`http://localhost:3000${url}`,{
                method: 'POST',
                body: JSON.stringify({key: key, value: value}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })



            let res2 = await res1.json()

            // res2 = JSON.parse(res2)
            // let token = JSON.parse(res2).token
            // console.log("token =",token)
            console.log("response =",res2)
            // store.dispatch(setLoading(false))
            // if(res2.permission){
            //     console.log("here")
            //     store.dispatch(setAuth(res2.permission))
            //     localStorage.setItem('token', res2.token)
            // //     setAuthorization(true)
            // }else{
            //     UIkit.notification({
            //         message:'Wrong password!',
            //         status: 'danger',
            //         pos: "top-center",
            //         timeout: 5000
            //     }); 
            // }
            
   
          
           
            // store.dispatch(setUser(res2.message)) //закидываем пользователя в state
            //теперь нам необходимо хранить где-то токен полученынный от сервера и хранить так чтобы мы могли получить
            //его даже после того как закроем браузер и для этой задачи подходит локальное хранилище

            //!!! localStorage.setItem('token', response.data.token)



        } catch (e) {
            //!!! dispatch(hideLoader())
            // if (!e.res2) {
                console.log("e = ",e)
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




export const getPrices = async (url) => {


    try {
      //!!! dispatch(showLoader())
      // const response = await axios.post(`${API_URL}api/auth/login`,
      //     {
      //         email,
      //         password
      //     })
      const res1 = await fetch(`http://localhost:3000${url}`,{
          method: 'GET',
          
        //   headers: {
        //       'Authorization': `Bearer ${localStorage.getItem('token')}`
        //   }
      })
      let res2 = await res1.json()
    //   console.log("!res2 = ",res2)
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











