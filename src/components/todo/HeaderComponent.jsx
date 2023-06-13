import React from "react";
import {Link} from "react-router-dom";
import {useAuth} from "./security/AuthContext";

export default function HeaderComponent() {
<<<<<<< HEAD
=======

//    const authContext = useContext(AuthContext)
>>>>>>> 67aeb01780623f92645fc49d4f05f8c9a9e0d6b4
    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    function logout() {
<<<<<<< HEAD
        authContext.logout()
=======
        authContext.setAuthenticated(false)
>>>>>>> 67aeb01780623f92645fc49d4f05f8c9a9e0d6b4
    }

    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.facebook.com/MJAShohan1">MJA Shohan</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    { isAuthenticated && <Link className="nav-link" to="/welcome/mjashohan">Home</Link> }
                                </li>
                                <li className="nav-item fs-5">
                                    { isAuthenticated && <Link className="nav-link" to="/todos">Todos</Link> }
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                { !isAuthenticated && <Link className="nav-link" to="/login">Login</Link> }
                            </li>
                            <li className="nav-item fs-5">
                                { isAuthenticated && <Link className="nav-link" to="/logout" onClick={ logout }>Logout</Link> }
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}