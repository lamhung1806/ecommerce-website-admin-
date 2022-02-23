import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deleteProducts,
  fetchProducts,
  resetForm,
  searchProducts,
} from "../redux/action/ProductApiAction";
import { changeStatusForm } from "../redux/action/statusFormAction";
import ProductForm from "./ProductForm/ProductForm";
import ProductItem from "./ProductItem/ProductItem";
import ProductPagination from "./ProductPagination";
import "./style.css";

function ProductManagement() {
  const [postPerPage] = useState(4);
  const [curentPage, setCurentPage] = useState(1);
  const statusForm = useSelector((state) => state.statusFormReducer.status);
  const dispatch = useDispatch();
  const productAll = useSelector((state) => state.apiProductAll.dataProductAll);
  const indexOfLastPost = curentPage * postPerPage;
  const indexOffirstPost = indexOfLastPost - postPerPage;
  const curentPost = productAll.slice(indexOffirstPost, indexOfLastPost);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      dispatch(deleteProducts(id));
    }
    return;
  };
  const handlerADD = () => {
    dispatch(changeStatusForm());
    dispatch(resetForm());
  };
  const getNameProduct = (e) => {
    e.target.value !== ""
      ? dispatch(searchProducts(e.target.value))
      : dispatch(fetchProducts());
  };
  const downtPagination = () => {
    if (curentPage > 1) setCurentPage(curentPage - 1);
    else return;
  };
  const upPagination = () => {
    setCurentPage(curentPage + 1);
  };
  return (
    <React.Fragment>
      <div style={{ margin: "50px 0 0 0" }}></div>
      <div className=" main container mt--6">
        <div className="row">
          <div className="col">
            <div className="card">
              {/* Card header */}
              <div className="card-header border-0">
                <h3 className="mb-0 text-center">Product Table</h3>
                <a href="#form">
                  <button onClick={handlerADD} className="btn btn-success">
                    {" "}
                    Add Product
                  </button>
                </a>

                <div className="input-group input-group  mb-3">
                  <input
                    onChange={getNameProduct}
                    type="text"
                    className="form-control"
                    placeholder="Product name"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
                <ProductPagination
                  totalPages={productAll.length}
                  postPerPage={postPerPage}
                  curentPage={curentPage}
                  downtPagination={downtPagination}
                  upPagination={upPagination}
                ></ProductPagination>
              </div>
              {/* Light table */}
              <div className="table-responsive">
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" className="sort" data-sort="name">
                        Product
                      </th>
                      <th scope="col" className="sort" data-sort="budget">
                        Sale off
                      </th>
                      <th scope="col" className="sort" data-sort="status">
                        Price
                      </th>
                      <th scope="col">Color</th>
                      <th scope="col" className="sort" data-sort="completion">
                        Descripton
                      </th>
                      <th scope="col" className="sort" data-sort="completion">
                        Specifications
                      </th>
                      <th scope="col" className="sort" data-sort="completion">
                        Quantity
                      </th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody className="list">
                    {curentPost.map((item, index) => (
                      <ProductItem
                        handleDelete={(id) => handleDelete(id)}
                        key={index}
                        data={item}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {statusForm && <ProductForm />}
    </React.Fragment>
  );
}

export default ProductManagement;
