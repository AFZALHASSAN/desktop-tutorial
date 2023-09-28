import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";
const Search = () => {
  const [values, setValues] = useSearch();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4" style={{ marginLeft:"2rem" }}>
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: "15rem", textAlign:"left"}}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body" style={{fontFamily:'sans-serif'}}>
                  <h5 className="card-title">{p.name.substring(0, 35)}...</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> $ {p.price} ⭐⭐⭐⭐</p>
                  <button
                    className="btn bg-info  p-1 text-white ms-1" style={{fontSize:'1rem', width:"100%"}}
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                   <div style={{color:"black"}}> More Details</div>
                  </button>
                  <br/>
                  <br/>
                  <button
                    className="btn btn-dark p-1 ms-1" style={{fontSize:'1rem', width:"100%"}}
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
