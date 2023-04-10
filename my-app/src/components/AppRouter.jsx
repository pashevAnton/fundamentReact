import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {publicRoutes, privateRoutes} from "../router/routes";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element} exact={route.exact}/>)}
                <Route path='*' element={<Navigate to='/posts' exact/>}/>
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element} exact={route.exact}/>)}
                <Route path='*' element={<Navigate to='/login' exact/>}/>
            </Routes>

    );
};

export default AppRouter;