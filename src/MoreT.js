import React from 'react'
import './MoreT.css'
import NotificationsIcon from "@material-ui/icons/Notifications";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import GetAppIcon from "@material-ui/icons/GetApp";


const MoreT = () => {
    return (
        <div className='moret'>
            <div className="moret__in">
               <NotificationsIcon/>
               <p>Notification Preferences</p> 
            </div>
            <hr/>
            <div className="moret__in">
             <MonetizationOnIcon/>
             <p>Sell on flipcart</p>
            </div>
            <hr/>
            <div className="moret__in">
            <LiveHelpIcon/>
            <p>24*7 Cutomer Care</p>
            </div>
            <hr/>
            <div className="moret__in">
               <TrendingUpIcon/>
              <p> Advertises</p>
            </div>
            <hr/>
            <div className="moret__in">
             <GetAppIcon/>
             <p>Download app</p>
            </div>
        </div>
    )
}

export default MoreT
