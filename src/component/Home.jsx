import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import ProductDetails from './product/ProductDetails';
import Category from "./category/Category";

import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/actions/CategoryAction";

function Home() {

  //useDispatch used to call an action 
  const dispatch = useDispatch();
  // console.log(dispatch)

  //useSelector is used to get data
  const { categories } = useSelector((state) => state.cat)
    console.log(categories);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  return (
    <div>
      {/* carousel start */}
      <div className="container-fluid">
        <div className="row px-xl-5 mb-2">
          <div className="col-lg-8 mb-2">
            <div
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              id="cr"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#cr"
                  data-bs-slide-to="0"
                  className="active"
                ></button>
                <button
                  type="button"
                  data-bs-target="#cr"
                  data-bs-slide-to="1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#cr"
                  data-bs-slide-to="2"
                ></button>
              </div>
              <div className="carousel-inner">
                <div
                  className="carousel-item active"
                  style={{ height: "430px" }}
                  data-bs-interval="2000"
                >
                  <img
                    className="w-100 h-100"
                    src="image/carousel-1.jpg"
                    alt="1"
                  />
                  <div className="carousel-caption">
                    <h1 className="animate__animated animate__backInDown">
                      Men Fashion
                    </h1>
                    <button className="animate__animated animate__backInUp btn btn-outline-light p-2">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{ height: "430px" }}
                  data-bs-interval="2000"
                >
                  <img
                    className="w-100 h-100"
                    src="image/carousel-2.jpg"
                    alt="2"
                  />
                  <div className="carousel-caption">
                    <h1 className="animate__animated animate__backInDown">
                      Women Fashion
                    </h1>
                    <button className="animate__animated animate__backInUp btn btn-outline-light p-2">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{ height: "430px" }}
                  data-bs-interval="2000"
                >
                  <img
                    className="w-100 h-100"
                    src="image/carousel-3.jpg"
                    alt="3"
                  />
                  <div className="carousel-caption">
                    <h1 className="animate__animated animate__backInDown">
                      Kids Fashion
                    </h1>
                    <button className="animate__animated animate__backInUp btn btn-outline-light p-2">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="offers1 mb-3">
              <div className="d-flex align-items-center justify-content-center flex-column">
                <h6 className="text-white text-uppercase pt-5">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-warning">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="offers2 mb-3">
              <div className="d-flex align-items-center justify-content-center flex-column">
                <h6 className="text-white text-uppercase pt-5">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-warning">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feature start */}
      <div className="container-fluid my-5">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
            <div className="d-flex align-items-center bg-white p-4">
              <h1 className="fa fa-check text-warning m-0 me-3"></h1>
              <h5>Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
            <div className="d-flex align-items-center bg-white p-4">
              <h1 className="fa fa-shipping-fast text-warning m-0 me-3"></h1>
              <h5>Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
            <div className="d-flex align-items-center bg-white p-4">
              <h1 className="fa fa-exchange text-warning m-0 me-3"></h1>
              <h5>Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
            <div className="d-flex align-items-center bg-white p-4">
              <h1 className="fa fa-phone-volume text-warning m-0 me-3"></h1>
              <h5>Quality Product</h5>
            </div>
          </div>
        </div>
      </div>
      {/* category start */}
      <div className="container-fluid">
        <div className="row px-xl-5 my-3">
          <h2 className="mb-3">CATEGORIES</h2>
          <hr />
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <a href="#" className="text-decoration-none ">
              <div className="cat d-flex align-items-center cl">
                <div className=" overflow-hidden  wh ">
                  <img className="img-fluid rd " src="image/cat-1.jpg" alt="" />
                </div>
                <div className="ps-3 text-dark">
                  <h6>Category Name</h6>
                  <small>100 Products</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <a href="#" className="text-decoration-none">
              <div className="cat d-flex align-items-center cl ">
                <div className=" overflow-hidden wh ">
                  <img className="img-fluid rd " src="image/cat-2.jpg" alt="" />
                </div>
                <div className="ps-3 text-dark">
                  <h6>Category Name</h6>
                  <small>100 Products</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <a href="#" className="text-decoration-none">
              <div className="cat d-flex align-items-center cl ">
                <div className=" overflow-hidden wh ">
                  <img className="img-fluid rd " src="image/cat-3.jpg" alt="" />
                </div>
                <div className="ps-3 text-dark">
                  <h6>Category Name</h6>
                  <small>100 Products</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <a href="#" className="text-decoration-none">
              <div className="cat d-flex align-items-center cl ">
                <div className=" overflow-hidden wh ">
                  <img className="img-fluid rd " src="image/cat-4.jpg" alt="" />
                </div>
                <div className="ps-3 text-dark">
                  <h6>Category Name</h6>
                  <small>100 Products</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <a href="#" className="text-decoration-none">
              <div className="cat d-flex align-items-center cl ">
                <div className=" overflow-hidden wh ">
                  <img className="img-fluid rd " src="image/cat-2.jpg" alt="" />
                </div>
                <div className="ps-3 text-dark">
                  <h6>Category Name</h6>
                  <small>100 Products</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <a href="#" className="text-decoration-none">
              <div className="cat d-flex align-items-center cl ">
                <div className=" overflow-hidden wh">
                  <img className="img-fluid rd " src="image/cat-4.jpg" alt="" />
                </div>
                <div className="ps-3 text-dark">
                  <h6>Category Name</h6>
                  <small>100 Products</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <a href="#" className="text-decoration-none">
              <div className="cat d-flex align-items-center cl ">
                <div className=" overflow-hidden wh ">
                  <img className="img-fluid rd " src="image/cat-1.jpg" alt="" />
                </div>
                <div className="ps-3 text-dark">
                  <h6>Category Name</h6>
                  <small>100 Products</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <a href="#" className="text-decoration-none">
              <div className="cat d-flex align-items-center cl ">
                <div className=" overflow-hidden wh ">
                  <img className="img-fluid rd " src="image/cat-2.jpg" alt="" />
                </div>
                <div className="ps-3 text-dark">
                  <h6>Category Name</h6>
                  <small>100 Products</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <a href="#" className="text-decoration-none">
              <div className="cat d-flex align-items-center cl ">
                <div className=" overflow-hidden wh ">
                  <img className="img-fluid rd " src="image/cat-1.jpg" alt="" />
                </div>
                <div className="ps-3 text-dark">
                  <h6>Category Name</h6>
                  <small>100 Products</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <a href="#" className="text-decoration-none">
              <div className="cat d-flex align-items-center cl">
                <div className=" overflow-hidden wh ">
                  <img className="img-fluid rd " src="image/cat-2.jpg" alt="" />
                </div>
                <div className="ps-3 text-dark">
                  <h6>Category Name</h6>
                  <small>100 Products</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <a href="#" className="text-decoration-none">
              <div className="cat d-flex align-items-center cl ">
                <div className=" overflow-hidden wh ">
                  <img className="img-fluid rd " src="image/cat-4.jpg" alt="" />
                </div>
                <div className="ps-3 text-dark">
                  <h6>Category Name</h6>
                  <small>100 Products</small>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <a href="#" className="text-decoration-none">
              <div className="cat d-flex align-items-center cl ">
                <div className=" overflow-hidden wh">
                  <img className="img-fluid rd " src="image/cat-3.jpg" alt="" />
                </div>
                <div className="ps-3 text-dark">
                  <h6>Category Name</h6>
                  <small>100 Products</small>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* product start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <h2>FEATURED PRODUCTS</h2>
          <hr />
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div className="card ">
              <img className="w-100 efz" src="image/product-1.jpg" alt="" />
              <div className="card-body bg-light">
                <h5 className="text-center aa">Product name goes Here</h5>
                <h5 className="text-center">
                  $123.00{" "}
                  <span className="text-danger">
                    <del>$300</del>
                  </span>
                </h5>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div className="card ">
              <img className="w-100 efz" src="image/product-2.jpg" alt="" />
              <div className="card-body bg-light">
                <h5 className="text-center aa">Product name goes Here</h5>
                <h5 className="text-center">
                  $123.00{" "}
                  <span className="text-danger">
                    <del>$300</del>
                  </span>
                </h5>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div className="card ">
              <img className="w-100 efz" src="image/product-3.jpg" alt="" />
              <div className="card-body bg-light">
                <h5 className="text-center aa">Product name goes Here</h5>
                <h5 className="text-center">
                  $123.00{" "}
                  <span className="text-danger">
                    <del>$300</del>
                  </span>
                </h5>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div className="card ">
              <img className="w-100 efz" src="image/product-4.jpg" alt="" />
              <div className="card-body bg-light">
                <h5 className="text-center aa">Product name goes Here</h5>
                <h5 className="text-center">
                  $123.00{" "}
                  <span className="text-danger">
                    <del>$300</del>
                  </span>
                </h5>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div className="card ">
              <img className="w-100 efz" src="image/product-5.jpg" alt="" />
              <div className="card-body bg-light">
                <h5 className="text-center aa">Product name goes Here</h5>
                <h5 className="text-center">
                  $123.00{" "}
                  <span className="text-danger">
                    <del>$300</del>
                  </span>
                </h5>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div className="card ">
              <img className="w-100 efz" src="image/product-6.jpg" alt="" />
              <div className="card-body bg-light">
                <h5 className="text-center aa">Product name goes Here</h5>
                <h5 className="text-center">
                  $123.00{" "}
                  <span className="text-danger">
                    <del>$300</del>
                  </span>
                </h5>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div className="card ">
              <img className="w-100 efz" src="image/product-7.jpg" alt="" />
              <div className="card-body bg-light">
                <h5 className="text-center aa">Product name goes Here</h5>
                <h5 className="text-center">
                  $123.00{" "}
                  <span className="text-danger">
                    <del>$300</del>
                  </span>
                </h5>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div className="card ">
              <img className="w-100 efz" src="image/product-8.jpg" alt="" />
              <div className="card-body bg-light">
                <h5 className="text-center aa">Product name goes Here</h5>
                <h5 className="text-center">
                  $123.00{" "}
                  <span className="text-danger">
                    <del>$300</del>
                  </span>
                </h5>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small className="fa fa-star text-warning me-1"></small>
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* offers start */}
      <div className="container-fluid">
        <div className="row px-xl-5 my-3">
          <div className="col-md-6 mb-2">
            <div
              className="offers1 mb-3"
              style={{ height: "260px !important" }}
            >
              <div className="d-flex align-items-center justify-content-center flex-column">
                <h6 className="text-white text-uppercase pt-5">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-warning">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div
              className="offers2 mb-3"
              style={{ height: " 260px !important" }}
            >
              <div className="d-flex align-items-center justify-content-center flex-column">
                <h6 className="text-white text-uppercase pt-5">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-warning">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
