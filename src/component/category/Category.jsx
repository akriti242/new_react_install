import React from 'react'
import { Link } from 'react-router-dom'

function Category({category}) {
  return (
    <>

      <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
        <Link to="" className="text-decoration-none">
          <div className="cat d-flex align-items-center mb-4">
            <div className=" overflow-hidden " style={{width: '100px', height: '100px'}}>
              <img className="img-fluid rd " src={category.image.url} alt="" />
            </div>
            <div className="ps-3 text-dark">
              <h6>{category.name}</h6>
              <small className='text-body'>100 Products</small>
            </div>
          </div>
        </Link>
      </div>


      {/* <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
        <a href="#" className="text-decoration-none">
          <div className="cat d-flex align-items-center cl ">
            <div className=" overflow-hidden wh ">
              <img className="img-fluid rd " src="image/cat-2.jpg" alt="" />
            </div>
            <div className="ps-3 text-dark">
              <h6>category.name</h6>
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
      */}
 
  </>
  )
}

export default Category