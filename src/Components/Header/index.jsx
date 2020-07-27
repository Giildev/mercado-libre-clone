// Dependencies
import React from "react";
import { Link } from "@reach/router";

// Components
import SearchBar from "../SearchBar";
import LogoML from "../../assets/Logo_ML.png";

// Styles
import { HeaderStyle, Logo, HeaderSpace } from "./styles";

const Header = (props) => {
  return (
    <HeaderStyle>
      <HeaderSpace>
        <Link to="/">
          <Logo src={LogoML} alt="Logo de Mercado Libre" />
        </Link>
        <SearchBar />
      </HeaderSpace>
    </HeaderStyle>
  );
};

export default Header;
