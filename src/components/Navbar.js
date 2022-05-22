import React from 'react'
import '../styling/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Navbar = () => {
  return (
    <div className='navbar'>

        <img className='navbar__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'></img>


        <div className="navbar__search">
            <input className='navbar__searchInput' type="text"/>
            <SearchIcon className='navbar__searchIcon'/>
        </div>


        <div className="navbar__nav">
            <div className="navbar__option">
                <span className="navbar__optionLineOne">Hello Guest</span>
                <span className="navbar__optionLineTwo">Sign In</span>
            </div>
            <div className="navbar__option">
                <span className="navbar__optionLineOne">Returns</span>
                <span className="navbar__optionLineTwo">& Orders</span>
            </div>
            <div className="navbar__option">
                <span className="navbar__optionLineOne">Your</span>
                <span className="navbar__optionLineTwo">Prime</span>
            </div>
            <div className="navbar__optionBasket">
                <ShoppingBasketIcon className='shoppingBasket'/>
                <span className="navbar__optionLineTwo navbar__basketCount">0</span>
            </div>
        </div>


    </div>
  )
}

export default Navbar