<!-- core concepts -->
  - store holds the state of entire application in a single object.
  - An action describes the changes that has to be happended in state in the application.
  - An action create is the function that returns the action. Thes action creators are useful when there is multiple 
    same action type dispatches in the application(reusable).
  - A reducer is the only one that carries out the actual state transition based on the action type described.

<!-- Three principles -->
 - 1) The state of our application is stored in an object tree within a single store
 - 2) the only way to change the application state is to emit action,i.e an object describing the what happened
 - 3) we have to write the pure reducers to specify the state tree is transformed by the actions.
     
      ex:-(prevstate,aciton) => newstate

<!-- Store -->
   one store for the entire application.
     - Holds application state.
     - we use the getState() to access the state.
     - we can update the state via dispatch(action)
     - It registerslisteners via subscribe(listner)-- here listener is the function  that is passed as a 
       parameter,which is executed after every updation of the state.
     - handles the unregister of listeners via the function returned by subscribe(listener)

<!-- Important points -->
 - createStore() method accepts reducer functions

<!-- Multiple Reducers -->
 - redux provides combineReducers function to combine multiple reducers into single Reducer.
 - combineReducer() function accepts the reducers in the form of key value pair.
   then we access the paricular state with state.key_of_reducer.state_name
 - when we dispatch an action, both reducers recieves that action
 - Multiple reducers are ussed for easy debugging.

<!-- Middleware -->
 - Middleware is used to extend the redux with custom functionality( extra features)
 - Middleware is a thirdparty extension point between dispatching an action,and the moment it reaches
   the reducer
 - Middleware helps us with logging, error reporting, performing asynchronous requests etc;
 - redux-logger is a middleware that we have used,redux provides applyMiddleware() funciton to apply 
   the middleware.
 - we have to applyMiddleware() as the second paraameter of createStore() function.
 - we are using redux-thunk(middleware) library for async actions means fetching data from API.
 - redux-thunk is a standard way to define asynchronous action creators in the application.
 - we should create an thunk action cretor that can return the function which has async logic (that funcyion
   doesn't has to be pure so it is allowed to have side effectssuch as async API calls) 
 - That returned function recieves the dispatch method  as an argument.so it dispatcjhes the actions whenever
   it is needed asynchronously.
  
<!-- react redux -->
 - we have to install packages react-redux redux
 - store(we have to provide store for the entire react application by using Provider - which is provided by 
   react-redux ) we have to wrap that provider with the prop with store value.
 - How to connect the redux store state and dispatch to the component ---- we have to import connect package from
   redux.Then,we have to export that component using connect(fn1,fn2)(componentName) here fn1,fn2 functions are (mapstatetoprops , mapdispatchtoprops) can access the redux store state  and dispatch respectively 
 - we have to define those functions and that should return the object with the values of state(which come by the
   state or dispatch) and those returned objects are mapped to that same component as props. so we can use the state and dispatch method in that component.
 - useSelector and useDispatch hooks(react-redux library) are the alternative way to the connect()
 - useSelector is the hook that accepts the the function which recieves the state as a parameter and returns the state 
   value
 - useDispatch() hook is used to give the reference to the redux dispatch method
 - Reacr dev tools is usedd for debugging the application and it shows the state transitionsand actions and we can 
    also dispatch in that dev tool. for that we have to install that extension in the browser and we have to install the package and import( import { composeWithDevTools } from 'redux-devtools-extension' )
    then we have to wrap the applymiddleware function with in composeWithDevTools()

<!-- mapStateToProps -->
    This method recieves the two parameters one is redux state and second one is that component own props.we can make use that props to make conditional assigning state.
