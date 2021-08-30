import React from 'react'
import './LoginT.css'
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import StoreIcon from "@material-ui/icons/Store";
const LoginT = () => {
    return (
        <div className='logint'>
            <div className="logint__in">
                <h5>New Customer?</h5>
                <h5 className='sign'>Signup</h5>
            </div>
            <hr/>
            <div className="logint__in">
             <AccountCircleIcon/>
             <p>My profile</p>
            </div>
            <hr/>
            <div className="logint__in">
             <StoreIcon/>
             <p>Orders</p>
            </div>
            <hr/>
            <div className="logint__in">
            <ConfirmationNumberIcon/>
            <p>Contact us</p>
            </div>
            <hr/>
            <div className="logint__in">
             <CardGiftcardIcon/>
             <p>Gift Cards</p>
            </div>
            <hr/>
            <div className="logint__in">
             <FavoriteIcon/>
             <p>Wishlist</p>
            </div>
        </div>
    )
}

export default LoginT
