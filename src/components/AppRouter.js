import React, {useContext} from 'react';
import{Route, Routes} from 'react-router-dom'

import {privateRoutes, publicRoutes} from "../routes";

import {Context} from "../index"
import {useAuthState} from "react-firebase-hooks/auth";

const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    console.log(user)
       return user ?
           (

               <Routes>
                   {privateRoutes.map(({path, element}) =><Route key={path} path={path} element={element}/>)}

               </Routes>
           )
           :
           (
               <Routes>
                   {publicRoutes.map(({path, element}) =><Route path={path} element={element}/>)}

               </Routes>
           )

};

export default AppRouter;