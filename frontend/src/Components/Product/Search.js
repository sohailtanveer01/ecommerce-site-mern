import React, { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import MetaData from "../Layouts/MetaData";
import "./Search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  let history = useHistory()
  const searchSubmitHandler = (e) => {
    
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;