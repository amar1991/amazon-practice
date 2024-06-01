import React,{useState} from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from 'firebase';


function Login(){
    
    
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const login = (event) => {

        console.log(event.preventDefault());
        event.preventDefault(); // stops the refresh
        // Login
        auth().signInWithEmailAndPassword(email,password)
        .then(
            (auth) => {
            // logged in successfully
            history.push('/');
        }
        )
        .catch((event) => alert(event.message));



       /* auth().signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in successfully
                history.push('/');
            })
            .catch((event) => alert(event.message));*/
    }    

    const register = (event) => {
        event.preventDefault(); // stops the refresh
        // Register
        auth().createUserWithEmailAndPassword(email, password)
            .then(
                (auth) => {
                // registered successfully and logged in
                history.push('/');
            }
            )
            .catch((event) => alert(event.message));
    }
    

    return (
        <div className="login">
            <Link to="/">
                <img
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt=""
                ></img>
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input onChange={(event) => setEmail(event.target.value)} type="email"></input>
                    <h5>Password</h5>
                    <input onChange={(event) => setPassword(event.target.value)} type="password"></input>
                    <button  type="submit" onClick={login} className="btn__login">Sign In</button>
                    <button onClick={register} className="btn__register">Create Account</button>
                </form>

            </div>



        </div>
    )
}

export default Login
