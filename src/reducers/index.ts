import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
import testReducer from './testReducer';
// import fileReducer from './fileReducer';
// import uploadReducer from './uploadReducer';
// import appReducer from './appReducer';

//ниже создадим непосредственно сам корневой редьюсер 
const rootReducer = combineReducers({
    test: testReducer,
    // files: fileReducer,
    // upload: uploadReducer,
    // app: appReducer
})



// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export const store = createStore(rootReducer)


export type RootState = ReturnType<typeof rootReducer>




// //внитри ф-ии setupStore мы будем конфигурировать наше redux хранилище. Без использования toolkit 
// //мы использовали ф-ию createStore. В данном же случае мы используем configureStore из redux/toolkit
// export const setupStore = () => {
//     return configureStore({
//         reducer: rootReducer, //т.е. в качестве reducer мы указываем наш корневой rootReducer
//         middleware: (getDefaultMiddleware) => //этот middleware необходим для работы createApi. И это будет стрелочная ф-ия которая аргументом также принимает ф-ию с помощью которой мы можем получить дефолтный middleware который уже подключены к redux toolkit например по умолчанию там идет redux thunk 
//                 getDefaultMiddleware().concat(postApi.middleware) //т.е. вот таким образом с помощью concat мы просто добавляем миддлвейр который получаем из нашего postApi
//     })
// }

// //теперь нам понадобятся некоторые типы с помощью которых мы 
// //будем с нашим хранилищем взаимодействовать. В первую очередь нам необходимо получить
// //тип нашего состояния - его можно получить либо из reducer либо напрямую из самого store
// export type RootState = ReturnType<typeof rootReducer>
// //также получим тип самого store - с помощью ReturnType мы можем получить тот тип 
// //который вернет нам ф-ия setupStore:
// export type AppStore = ReturnType<typeof setupStore>
// //и также получим тип dispatch нашего хранилища
// export type AppDispatch = AppStore["dispatch"]