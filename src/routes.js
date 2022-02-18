import React from 'react'
import {LOGIN_ROUTE} from "./utils/consts";
import {HOME_ROUTE} from "./utils/consts";
import {LIST_ROUTE} from "./utils/consts";
import {CHAT_ROUTE} from "./utils/consts";
import {ADD_ROUTE} from "./utils/consts";
import Login from "./components/Login";
import Chat from "./components/Chat";
import Home from "./components/Home";
import List from "./components/List";
import ItemForm from "./components/ItemForm";

export const publicRoutes = [

    {
        path: LOGIN_ROUTE,
        element: <Login/>

    }
    ,
    {

        path: HOME_ROUTE,
        element: <Home/>
    }
]

export const privateRoutes = [


    {

        path: HOME_ROUTE,
        element: <Home/>
    },
    {

        path: LIST_ROUTE,
        element: <List/>
    },
    {

        path: ADD_ROUTE,
        element: <ItemForm/>
    }


]
