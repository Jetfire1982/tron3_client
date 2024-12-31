const SET_SERVER_START_STOP = "SET_SERVER_START_STOP";
const SET_TEST1 = "SET_TEST1";
const SET_TEST2 = "SET_TEST2";
const SET_TEST3 = "SET_TEST3";
const ALL_STATUS_CHANGE = "ALL_STATUS_CHANGE"


//чтобы изначально определить какие поля и какого типа у нас будут. 
export interface statusState{
    server_start_stop: boolean;
    test1: boolean;
    test2: boolean;
    test3: boolean;
    audcad: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    audchf: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,
        }
    };
    audjpy: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    audnzd: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    audusd: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    cadchf: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    cadjpy: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    chfjpy: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    euraud: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    eurcad: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    eurchf: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    eurgbp: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    eurjpy: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    eurnzd: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    eurusd: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    gbpaud: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    gbpcad: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    gbpchf: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    gbpjpy: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    gbpnzd: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    gbpusd: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    nzdcad: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    nzdchf: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    nzdjpy: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    nzdusd: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    usdcad: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    usdchf: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };
    usdjpy: {
        targets: {
            first: number;
            first_description: string,
            second: number,
            second_description: string,
            third: number,
            third_description: string,
            fourth: number,
            fourth_description: string,
            fifth: number
            fifth_description: string,

        }
    };

}



//редьюсер о полях статуса
const defaultState: statusState = {
    server_start_stop: false,
    test1: false,
    test2: false,
    test3: true,
    audcad: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    audchf: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    audjpy: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    audnzd: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    audusd: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    cadchf: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    cadjpy: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    chfjpy: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    euraud: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    eurcad: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    eurchf: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    eurgbp: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    eurjpy: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    eurnzd: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    eurusd: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    gbpaud: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    gbpcad: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    gbpchf: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    gbpjpy: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    gbpnzd: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    gbpusd: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    nzdcad: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    nzdchf: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    nzdjpy: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    nzdusd: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    usdcad: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    usdchf: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
    usdjpy: {
        targets: {
            first: 0.0,
            first_description: 'Enter the description',
            second: 0.0,
            second_description: 'Enter the description',
            third: 0.0,
            third_description: 'Enter the description',
            fourth: 0.0,
            fourth_description: 'Enter the description',
            fifth: 0.0,
            fifth_description: 'Enter the description',
        }
    },
}



//первым параметром редьюсер принимает состояние а вторым экшен
export default function status1Reducer(state = defaultState, action: any):statusState {
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
                case SET_TEST3:
                    return {
                        ...state,
                        test3: action.payload
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
export const setTest3 = (test3: boolean) =>({type: SET_TEST3, payload: test3})
export const setAllStatusChange = (ob: object ) =>({type: ALL_STATUS_CHANGE, payload: ob})
