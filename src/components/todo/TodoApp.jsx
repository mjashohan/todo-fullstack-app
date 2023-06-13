import React from "react";
import './TodoApp.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import ListTodosComponent from "./ListTodosComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
<<<<<<< HEAD
import AuthProvider, {useAuth} from "./security/AuthContext";

function AuthenticatedRoute( {children} ) {
    const authContext = useAuth()

    if(authContext.isAuthenticated)
        return children
    return <Navigate to="/" />
}
=======
import AuthProvider from "./security/AuthContext";
>>>>>>> 67aeb01780623f92645fc49d4f05f8c9a9e0d6b4

export default function TodoApp() {
    return(
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />
<<<<<<< HEAD

                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>
                        } />

                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>
                            } />

                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        } />
=======
                        <Route path='/welcome/:username' element={<WelcomeComponent />} />
                        <Route path='/todos' element={<ListTodosComponent />} />
                        <Route path='/logout' element={<LogoutComponent />} />
>>>>>>> 67aeb01780623f92645fc49d4f05f8c9a9e0d6b4
                        <Route path='*' element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}