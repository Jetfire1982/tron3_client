const SET_USER = "SET_USER";
const SET_AUTH = "SET_AUTH";
const SET_LOADING = "SET_LOADING";
const LOGOUT = "LOGOUT"; // по этому кейсу пользователь будет разлогиниваться

//чтобы изначально определить какие поля и какого типа у нас будут. 
interface testState{
    currentUser: string;
    loading: boolean;
    isAuth: boolean;
}


//редьюсер о пользователях
const defaultState: testState = {
    currentUser: "Petr",
    loading: false,
    isAuth: false //переменная отвечает залогинился пользователь или нет
}



//первым параметром редьюсер принимает состояние а вторым экшен
export default function testReducer(state = defaultState, action: any) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
        case SET_AUTH:
                return {
                    ...state,
                    isAuth: action.payload
                }
        case SET_LOADING:
                return {
                    ...state,
                    loading: action.payload
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
export const setAuth = (auth: boolean) => ({ type: SET_AUTH, payload: auth })
export const setLoading = (loading: boolean) =>({type: SET_LOADING, payload: loading})
export const logout = () => ({ type: LOGOUT })