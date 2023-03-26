const redux = require('redux');
const axios = require('axios');
const thunkMiddleware = require('redux-thunk').default;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialstate = {
    loading:false,
    users:[],
    error:[]
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = () => {
    return {
        type : FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = (users) => {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}
const fetchUsersFailure = (error) => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}

const reducer = (state = initialstate,action) =>{
    switch(action.type){
        case 'FETCH_USERS_REQUEST' : return {
            ...state,
            loading:true
        }
        case 'FETCH_USERS_SUCCESS' : return {
            loading: false,
            users : action.payload,
            errors : ''
        }
        case 'FETCH_USERS_FAILURE' : return {
            loading: false,
            users : [],
            error :action.payload
        }
        default : return state;
    }
}

//thunk action creator
const fetchusers = () =>{
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data.map(users => users.id);
            dispatch(fetchUsersSuccess(users));
        })
        .catch(error => {
            dispatch(fetchUsersFailure(error.message));
        })
    }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware));
store.subscribe(()=>{console.log("updatedstate:",store.getState())});
store.dispatch(fetchusers());