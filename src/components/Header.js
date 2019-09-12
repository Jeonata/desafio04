import React from "react";

import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <img src={logo}></img>
        </div>
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
