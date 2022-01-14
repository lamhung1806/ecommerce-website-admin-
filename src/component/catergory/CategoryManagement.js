import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProducts, resetForm } from "../redux/action/ProductApiAction";
import { changeStatusForm } from "../redux/action/statusFormAction";
import ProductForm from "./categoryForm/CartegoryForm";
import CategoryItem from "./categorytItem/CategoryItem";
import { deleteCategorys, getCategorys } from "../redux/action/CategoryAction";
import { resetFormCategory } from "../redux/action/CategoryAction";
import "./style.css";

function CategoryManagement() {
  const dispatch = useDispatch();
  const dataCategory = useSelector((state) => state.category.dataCategory);
  const statusForm = useSelector((state) => state.statusFormReducer.status);

  useEffect(() => {
    dispatch(getCategorys());
  }, []);
  const handlerADD = () => {
    dispatch(changeStatusForm());
    dispatch(resetFormCategory());
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      dispatch(deleteCategorys(id));
    }
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
                <h3 className="mb-0 text-center">Product Categoty</h3>
                <button onClick={handlerADD} className="btn btn-success">
                  Add Categoty
                </button>
              </div>
              {/* Light table */}
              <div className="table-responsive">
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" className="sort" data-sort="name">
                        Id
                      </th>
                      <th scope="col" className="sort" data-sort="budget">
                        Name
                      </th>
                      <th scope="col" className="sort" data-sort="budget">
                        Date Create
                      </th>
                      <th scope="col" className="sort" data-sort="budget">
                        Date Update
                      </th>
                      <th scope="col" className="sort" data-sort="budget">
                        Options
                      </th>
                    </tr>
                  </thead>
                  <tbody className="list">
                    {dataCategory.map((item, index) => (
                      <CategoryItem
                        key={index}
                        data={item}
                        handleDelete={(id) => handleDelete(id)}
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

export default CategoryManagement;
