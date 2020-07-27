// Dependencies
import React, { useState } from "react";
import { connect } from "react-redux";
import { setSearch, setItems } from "../../redux/actions";

// Components
import icSearch from "../../assets/ic_Search.png";

// Styles
import { SearchBarStyle, SearchBox, SearchIconBox, SearchIcon } from "./styles";

const SearchBar = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = async (event) => {
    if (event.key === "Enter" || event.type === "click") {
      props.setSearch(text);
      window.location.replace(`/items?search=${text}`);
    }
  };

  const handleChange = (event) => {
    setText(event.currentTarget.value);
  };

  return (
    <SearchBarStyle>
      <SearchBox
        type="text"
        onChange={handleChange}
        placeholder="Nunca dejes de Buscar"
        onKeyPress={handleSubmit}
      />
      <SearchIconBox onClick={handleSubmit}>
        <SearchIcon src={icSearch} />
      </SearchIconBox>
    </SearchBarStyle>
  );
};

export default connect(null, { setSearch, setItems })(SearchBar);
