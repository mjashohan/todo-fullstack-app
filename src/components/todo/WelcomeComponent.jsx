import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import {retrieveHelloWorldPathVariable} from './api/HelloWorldApiService'
import {useAuth} from "./security/AuthContext";

export default function WelcomeComponent() {
    const { username } = useParams()
    const [message, setMessage] = useState(null)
    const authContext = useAuth()
    function callHelloWorldRestApi() {
        // retrieveHelloWorldBean()
        //     .then( (response) => successfulResponse(response) )
        //     .catch( (error) => errorResponse(error) )
        //     .finally( () => console.log('cleanup') )
        // axios.get('http://localhost:8080/hello-world')
        //     .then( (response) => successfulResponse(response) )
        //     .catch( (error) => errorResponse(error) )
        //     .finally( () => console.log('cleanup') )

        retrieveHelloWorldPathVariable('Sara', authContext.token)
            .then( (response) => successfulResponse(response) )
            .catch( (error) => errorResponse(error) )
            .finally( () => console.log('cleanup') )
    }

    function successfulResponse(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }

    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
               Manage your todos: <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={ callHelloWorldRestApi }>
                    Call Hello World
                </button>
                <div className="text-info">{ message }</div>
            </div>
        </div>
    )
}