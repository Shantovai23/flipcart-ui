import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import MoreT from "./MoreT";
import LoginT from "./LoginT";
import "tippy.js/themes/light.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__first">
        <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="flipcart-logo"
        />
        <div className="header__first1">
          <span
            style={{ fontSize: "13px", color: "white", fontStyle: "italic" }}
          >
            Explore
          </span>
          <span
            style={{ fontSize: "13px", fontStyle: "italic", color: "#f9e107" }}
          >
            Plus
          </span>
          <span>
            <img
              width="12"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt="flipkart-plus"
            />
          </span>
        </div>
      </div>

      <div className="header__second">
        <input
          type="text"
          name="search"
          placeholder="Search for products and more..."
        />
        <SearchIcon />
      </div>
      <div className="header__third">
        <Tippy theme="light" content={<LoginT />} interactive={true}>
          <button>Login</button>
        </Tippy>
      </div>
      <div className="header__fourth">
        <Tippy theme="light" content={<MoreT />} interactive={true} offset={[5,17]}>
          <span>More</span>
        </Tippy>
        <ExpandMoreIcon />
      </div>
      <div className="header__fifth">
        <ShoppingCartIcon />
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Header;
