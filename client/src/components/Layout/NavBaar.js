import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../../hooks/useCategory";
import "./Header.css";
const NavBaar = () => {
  const categories = useCategory();
  return (
    <>
    <div className="navbar1">
      <div className="container"> 
        <div className="row ">
          {categories.map((c) => (
            <div className="col-md-3" key={c._id}>
              <Link to={`/category/${c.slug}`} className="navbar1-items">
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
      
    </>
  );
};

export default NavBaar;
