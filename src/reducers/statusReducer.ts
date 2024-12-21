const SET_SERVER_START_STOP = "SET_SERVER_START_STOP";
const SET_TEST1 = "SET_TEST1";
const SET_TEST2 = "SET_TEST2";
const ALL_STATUS_CHANGE = "ALL_STATUS_CHANGE"


//чтобы изначально определить какие поля и какого типа у нас будут. 
interface statusState{
    server_start_stop: boolean;
    test1: boolean;
    test2: boolean;
}



//редьюсер о полях статуса
const defaultState: statusState = {
    server_start_stop: false,
    test1: false,
    test2: false 
}



//первым параметром редьюсер принимает состояние а вторым экшен
export default function statusReducer(state: statusState = defaultState, action: any) {
    switch (action.type) {
        case SET_SERVER_START_STOP:
            return {
                ...state,
                server_start_stop: action.payload,
            }
        case SET_TEST1:
                return {
                    ...state,
                    test1: action.payload
                }
        case SET_TEST2:
                return {
                    ...state,
                    test2: action.payload
                }
        case ALL_STATUS_CHANGE: 
                return {
                    ...action.payload
                }
        default:
            return state
    }
}


//ниже создаем экшен криэйтор
export const setServerStartStop = (startStop: boolean) => ({ type: SET_SERVER_START_STOP, payload: startStop })
export const setTest1 = (test1: boolean) => ({ type: SET_TEST1, payload: test1 })
export const setTest2 = (test2: boolean) =>({type: SET_TEST2, payload: test2})
export const setAllStatusChange = (ob: object ) =>({type: ALL_STATUS_CHANGE, payload: ob})
