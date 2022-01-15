/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getOderById } from "../../redux/action/oderActions";
import OderdetailItem from "./OderdetailItem";

function Oderdetail() {
  const dispatch = useDispatch();
  const oderDetailData = useSelector((state) => state.oder.oderDetailData);
  useEffect(() => {
    dispatch(getOderById(JSON.parse(localStorage.getItem("idOder"))));
  }, []);

  return (
    <div className=" main container mt--6">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header border-0">
              <h3 className="mb-0 text-center">Oder Table</h3>
            </div>
            <div className="table-responsive">
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" className="sort" data-sort="name">
                      Id
                    </th>
                    <th scope="col" className="sort" data-sort="budget">
                      Product
                    </th>
                    <th scope="col" className="sort" data-sort="completion">
                      total money
                    </th>
                    <th scope="col" className="sort" data-sort="status">
                      Phone
                    </th>
                    <th scope="col" className="sort" data-sort="completion">
                      Address
                    </th>
                    <th scope="col">CreateOn</th>
                    <th scope="col">UptateOn</th>
                    <th scope="col">Status</th>

                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody className="list">
                  <OderdetailItem oderDetailData={oderDetailData} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Oderdetail;
