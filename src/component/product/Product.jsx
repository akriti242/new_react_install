import React from 'react'
import { Link } from 'react-router-dom'

function Product({products}) {
  return (
 <>
  <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div className="card ">
              <Link to={`/ProductDetails/${products?._id} `}>
              {/* */}
              <img className="w-100 efz" src={products?.images?.url} alt="" />
              </Link>
              <div className="card-body bg-light">
                <h5 className="text-center aa"> {products.name} </h5>
                <h5 className="text-center">
                ₹{products.price}
                  <span className="text-danger">
                    {/* <del> ₹2999</del> */}
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
 </>
  )
}

export default Product