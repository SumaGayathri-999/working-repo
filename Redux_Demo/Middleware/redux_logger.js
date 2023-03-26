
const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const redux_logger = require('redux-logger');
const logger = redux_logger.createLogger();
const applyMiddleware = redux.applyMiddleware;


const initialCakes= {
    no_of_cakes : 10
}
const initialIceCreams= {
    no_of_icecreams : 20
}
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';


//action creater
const buy_cake = ()=>{
    return {
        type : BUY_CAKE,
        info :'buying cake'
    }
}
const buy_icecream = ()=>{
    return {
        type : BUY_ICECREAM,
        info :'buying ice cream'
    }
}
const cakeReducer = (state = initialCakes,action) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            no_of_cakes : state.no_of_cakes - 1
        }
        default: return state;
    }
}
const iceCreamReducer = (state = initialIceCreams,action) => {
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state,
            no_of_icecreams : state.no_of_icecreams - 1
        }
        default: return state;
    }
}
//combining reducers to one single reducer
const root_reducer = combineReducers({
    cake:cakeReducer,icecream:iceCreamReducer
})
const store = createStore(root_reducer,applyMiddleware(logger));
// console.log(store.getState());
// console.log(initialState)
const unSubscribe = store.subscribe(()=>{});
store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_icecream());
store.dispatch(buy_icecream());
store.dispatch(buy_icecream());

unSubscribe();


