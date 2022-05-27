import React from "react";
import "./style.scss";
import { useFormik } from "formik";
import { FiSearch } from "react-icons/fi";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import useIsMobileScreen from "../../utils/hooks/useIsMobileScreen";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      searchTerm: "",
    },
    onSubmit: (values) => {
      navigate(`search/${values.searchTerm}`);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="d-flex">
      {/* <InputGroup
        onSubmit={formik.handleSubmit}
        className="justify-content-between searbarInputGroup border    border-top-left-radius: 10px;
      "
      > */}
      <div className="searchbar-input border">
        <FiSearch
          size={24}
          style={{ margin: "8px" }}
          className="d-none d-sm-block"
        />
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          onChange={formik.handleChange}
          value={formik.values.searchTerm}
          autoComplete="off"
          className="h-100"
          placeholder="Search for products..."
        />
      </div>

      <button type="submit" className="btn btn-primary rounded-3 search-btn">
        Search
      </button>
      {/* </InputGroup> */}
    </form>
  );
};

export default Searchbar;
