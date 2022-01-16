/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserData } from "../redux/action/userAction";
import UserManagerItem from "./UserManagerItem";

function User() {
  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.user.listUser);
  useEffect(() => {
    dispatch(getUserData());
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
                <h3 className="mb-0 text-center">User Management Table</h3>
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
                        User Name
                      </th>
                      <th scope="col" className="sort" data-sort="budget">
                        Email
                      </th>
                      <th scope="col" className="sort" data-sort="status">
                        Full Name
                      </th>
                      <th scope="col" className="sort" data-sort="completion">
                        Roles
                      </th>

                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="list">
                    {listUser.map((item, index) => (
                      <UserManagerItem key={index} data={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default User;
