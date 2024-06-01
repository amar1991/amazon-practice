import React from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import  {auth, Auth}  from 'firebase';

function Header() {

    //destructer [{}] //action to DATA Layer
    const [{basket, user}] = useStateValue();

     const login = () =>{
         if(user){
            auth().signOut();
         }
     }

    return (
        <nav className="header">
            {/*Logo on left, Clickable in Link*/}
            <Link to="/"> 
                <img className="header__logo" src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-Background.png" alt=""></img>
            </Link>
                   
            {/*Searchbox, style both using div*/}
            <div className="header__search">
                <input type="text" className="header__searchInput"></input>
                    <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            
            <div className="header__nav">
                {/*first link,href cause refresh if no user then push to login page  */}
                <Link to={!user && "/login"} className="header__link">
                      <div onClick={login} className="header__options"> 
                            <span className="header__optionLineOne">Hello {user?.email}</span>                               
                            <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>                   
                      </div>                     
                </Link>
               
             
                {/*second link*/}
                <Link to="/login" className="header__link">
                      <div className="header__options"> 
                            <span className="header__optionLineOne">Return</span>                               
                            <span className="header__optionLineTwo">& Orders</span>                   
                      </div>                     
                </Link>
               
                {/*3rd link*/}
                <Link to="/login" className="header__link">
                      <div className="header__options"> 
                            <span className="header__optionLineOne">Your</span>                               
                            <span className="header__optionLineTwo">Sign In</span>                   
                      </div>                     
                </Link>

                {/*4th link*/}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/*Shopping Basket*/}
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        {/*No of Basket, ? is optional*/}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
   
                    </div>
                </Link>
            </div>

        </nav>
    );
}

export default Header
