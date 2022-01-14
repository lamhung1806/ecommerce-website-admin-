import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OderItem from "./oderItem/OderItem";
import { getOder } from "../redux/action/oderActions";

function Oder(props) {
  const dispatch = useDispatch();
  const listOder = useSelector((state) => state.oder.oderData);
  useEffect(() => {
    dispatch(getOder());
  }, []);

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
                    {listOder.map((item, index) => (
                      <OderItem
                        //   handleDelete={(id) => handleDelete(id)}
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
      {/*   
        {statusForm && <ProductForm />} */}
    </React.Fragment>
  );
}

export default Oder;
