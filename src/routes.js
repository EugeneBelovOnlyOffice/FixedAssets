import React from 'react'
import {LOGIN_ROUTE} from "./utils/consts";
import {CHAT_ROUTE} from "./utils/consts";
import Login from "./components/Login";
import Chat from "./components/Chat";

export const publicRoutes = [

    {
        path: LOGIN_ROUTE,
        element: <Login/>
    }
]

export const privateRoutes = [

    {
        path: CHAT_ROUTE,
        element: <Chat/>
    }
]
