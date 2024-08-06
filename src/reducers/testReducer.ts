const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT"; // по этому кейсу пользователь будет разлогиниваться

//чтобы изначально определить какие поля и какого типа у нас будут. 
interface testState{
    currentUser: string;
    isAuth: boolean;
}


//редьюсер о пользователях
const defaultState: testState = {
    currentUser: "Petr",
    isAuth: false //переменная отвечает залогинился пользователь или нет
}



//первым параметром редьюсер принимает состояние а вторым экшен
export default function testReducer(state = defaultState, action: any) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token');  //удаляем token из локального хранилища
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default:
            return state
    }
}


//ниже создаем экшен криэйтор
export const setUser = (user: any) => ({ type: SET_USER, payload: user })
export const logout = () => ({ type: LOGOUT })