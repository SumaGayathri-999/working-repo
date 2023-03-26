const redux = require('redux');
const createStore = redux.createStore;


const initialState = {
    no_of_cakes : 10
}
const BUY_CAKE = 'BUY_CAKE';

//action creater
const buy_cake = ()=>{
    return {
        type : BUY_CAKE,
        info :'First redux action'
    }
}
const reducer = (state = initialState,action) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            no_of_cakes : state.no_of_cakes - 1
        }
        default: return state;
    }
}
const store = createStore(reducer);
console.log(store.getState())
// console.log(initialState)
const unSubscribe = store.subscribe(()=>console.log('updated state',store.getState()));
store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_cake());
unSubscribe();


