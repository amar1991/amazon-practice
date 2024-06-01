import React,{useEffect} from 'react';
import {
    BrowserRouter as Router, Switch, Route
}
from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import "./Header.css"
import Home from "./Home"
import Login from "./Login"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function App() {
    
    const [{user},dispatch] = useStateValue();
    
    //Piece of code which runs based on a given condition
    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                dispatch({
                    type:"SET_USER",
                    user:authUser
                })
            }else {
                dispatch({
                    type:"SET_USER",
                    user:null
                })

            }
        })

        return () => {
            //cleanup operation go here..
            unsubscribe();

        }
    }, [])

    return(
    <Router>
         <div className="app"> 
         <Switch>
             <Route path="/checkout">
                 {/*Header always shown */}
                 <Header />
                 <Checkout></Checkout>
             </Route>

             <Route path="/login">
                 <Login></Login>
             </Route>

             <Route path="/">
                 <Header />
                 <Home></Home>
             </Route>

         </Switch>
        </div> 
    </Router>);
}

export default App;
