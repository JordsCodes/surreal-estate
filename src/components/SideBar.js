import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/side-bar.css";

const SideBar = () => {
  const initialState = "";

  const [query, setQuery] = useState(initialState);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('test');
    const queryString = buildQueryString("query", { title: { $regex: query } });
    console.log(queryString);
  };

  return (
    <div className="side-bar">
      Search by Title
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-form-input"
          name="search-input"
          onChange={handleQueryChange}
        />
      </form>
      Filter by City
      <Link
        className="sidebar-link"
        to={buildQueryString("query", { city: "Manchester" })}
      >
        Manchester
      </Link>
      <Link
        className="sidebar-link"
        to={buildQueryString("query", { city: "Leeds" })}
      >
        Leeds
      </Link>
      <Link
        className="sidebar-link"
        to={buildQueryString("query", { city: "Sheffield" })}
      >
        Sheffield
      </Link>
      <Link
        className="sidebar-link"
        to={buildQueryString("query", { city: "Liverpool" })}
      >
        Liverpool
      </Link>
      <Link
        className="sidebar-link"
        to={buildQueryString("query", { city: "Newcastle" })}
      >
        Newcastle
      </Link>
      <Link
        className="sidebar-link"
        to={buildQueryString("query", { city: "York" })}
      >
        York
      </Link>
      Sort by Price
      <Link
        className="sidebar-link"
        to={buildQueryString("sort", { price: -1 })}
      >
        Ascending
      </Link>
      <Link
        className="sidebar-link"
        to={buildQueryString("sort", { price: -1 })}
      >
        Descending
      </Link>
    </div>
  );
};

export default SideBar;
