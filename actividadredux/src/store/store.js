import {createStore,combineReducers} from "redux";

import articulosReducer from "./articulos/reducer";

//en primer lugar, combinar todos los reducers en caso que tenga mas de uno

const reducers=combineReducers(
    {
        articulosReducer,
    });

//creacion del store

const store=createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;