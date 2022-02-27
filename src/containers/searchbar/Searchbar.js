import React from "react";
import "./style.scss";
import { useFormik } from "formik";
import { FiSearch } from "react-icons/fi";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import useIsMobileScreen from "../../utils/hooks/useIsMobileScreen";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  const isMobile = useIsMobileScreen();

  const formik = useFormik({
    initialValues: {
      searchTerm: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <InputGroup
      onSubmit={formik.handleSubmit}
      className="justify-content-between searbarInputGroup border    border-top-left-radius: 10px;
      "
    >
      <div className="searchbar-input  ">
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
          className=" h-100 "
          placeholder="Search for products..."
        />
      </div>

      <button type="submit" className="btn btn-primary rounded-3 search-btn">
        Search
      </button>
    </InputGroup>
  );
};

export default Searchbar;
