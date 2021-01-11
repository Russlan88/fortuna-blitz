// import React from 'react'
// import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';

// function Header() {
//     return (
//         <div className="hader">
//             <img src={Logo} alt="Logo" />
//             <NavLink to="/" exact activeStyle={{fontWeight: "bold", color: "red"}}>
//                 Home
//             </NavLink>
//             <NavLink to="/products" exact activeStyle={{fontWeight: "bold", color: "red"}}>
//                 Products
//             </NavLink>
//             <NavLink to="/contacts" exact activeStyle={{fontWeight: "bold", color: "red"}}>
//                 Contact Us
//             </NavLink>
//         </div>
//     )
// }

// export default Header

import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "../hamburger/hamburger";
import './header.scss';

const Header = ({ history }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">

              <Link to="/"><img src={Logo} style={{width: "60px", marginLeft: "130px"}} alt="Logo" />{' '}Fortuna Blitz</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
