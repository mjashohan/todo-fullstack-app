import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function LoginComponent() {
    const [username, setUsername] = useState('mjashohan')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }
    function handleSubmit() {
        if(username === 'mjashohan' && password==='sara') {
            console.log('Success')
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        }
        else {
            console.log('Failed')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return(
        <div className="Login">
            <h1>Time to login!</h1>
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authenticated Failed. Please check your credentials</div>}

            <div className="LoginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="Login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}