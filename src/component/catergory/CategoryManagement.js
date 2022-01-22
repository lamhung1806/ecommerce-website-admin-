/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeStatusForm } from "../redux/action/statusFormAction";
import ProductForm from "./categoryForm/CartegoryForm";
import CategoryItem from "./categorytItem/CategoryItem";
import {
  deleteCategorys,
  getCategorys,
  searchCategory,
} from "../redux/action/CategoryAction";
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
  const getNameCategory = (e) => {
    e.target.value !== ""
      ? dispatch(searchCategory(e.target.value))
      : dispatch(getCategorys());
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
              <div className="input-group input-group  mb-3">
                <input
                  onChange={getNameCategory}
                  type="text"
                  className="form-control"
                  placeholder="Category Name"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  // onClick={handleSearch}
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Search
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
