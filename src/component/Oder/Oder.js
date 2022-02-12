/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OderItem from "./oderItem/OderItem";
import { getOder } from "../redux/action/oderActions";

function Oder() {
  const dispatch = useDispatch();
  const [curentPage, setCurentPage] = useState(1);
  const [pagePerPage] = useState(5);
  const indexLast = curentPage * pagePerPage;
  const indexFirst = indexLast - pagePerPage;
  const listOder = useSelector((state) => state.oder.oderData);
  const lisOderAPage = listOder.slice(indexFirst, indexLast);
  useEffect(() => {
    dispatch(getOder());
  }, []);
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
                <h3 className="mb-0 text-center">Oder Table</h3>
              </div>
              <ul className="pagination  justify-content-end pr-5">
                <li>
                  <i
                    onClick={() => downtPagination()}
                    className="fas fa-chevron-left ml-2 mt-1 mr-2"
                  ></i>
                </li>
                <li>
                  {" "}
                  <span className="text-success">{curentPage}</span> /2
                </li>
                <li>
                  <i
                    onClick={() => upPagination()}
                    className="fas fa-chevron-right ml-2 mt-1"
                  ></i>
                </li>
              </ul>
              {/* Light table */}
              <div className="table-responsive">
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" className="sort" data-sort="name">
                        Id
                      </th>
                      <th scope="col" className="sort" data-sort="budget">
                        Status
                      </th>
                      <th scope="col" className="sort" data-sort="budget">
                        User Name
                      </th>
                      <th scope="col" className="sort" data-sort="status">
                        Phone
                      </th>
                      <th scope="col" className="sort" data-sort="completion">
                        Address
                      </th>
                      <th scope="col">CreateOn</th>
                      <th scope="col">UptateOn</th>

                      <th scope="col">Detail</th>
                    </tr>
                  </thead>
                  <tbody className="list">
                    {lisOderAPage.map((item, index) => (
                      <OderItem key={index} data={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*   
        {statusForm && <ProductForm />} */}
    </React.Fragment>
  );
}

export default Oder;
