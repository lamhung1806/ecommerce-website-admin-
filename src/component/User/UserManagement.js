import React from "react";
import UserManagerItem from "./UserManagerItem";

function User(props) {
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
                        Name
                      </th>
                      <th scope="col" className="sort" data-sort="completion">
                        Roles
                      </th>
                      <th scope="col">CreateOn</th>
                      <th scope="col">UptateOn</th>

                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="list">
                    {/* {listOder.map((item, index) => (
                      <OderItem key={index} data={item} />
                    ))} */}
                    <UserManagerItem />
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

export default User;
