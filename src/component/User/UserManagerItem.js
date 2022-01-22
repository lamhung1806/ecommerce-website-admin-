import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getRolesUser } from "../redux/action/userAction";

function UserManagerItem({ data }) {
  const dispatch = useDispatch();
  const handleUpdateRole = () => {
    dispatch(getRolesUser(data.userId));
  };
  return (
    <tr>
      {/* <td className="userId">{data.userId}</td> */}
      <td className="userName">{data.userName}</td>
      <td className="Email_User">{data.email}</td>
      {/* <td className="fullName_User">{data.firstName}</td> */}
      <td className="roles_user">
        {data.roles.map((item, id) => (
          <span key={id} style={{ marginLeft: "20px" }}>
            {item}
          </span>
        ))}
      </td>

      <td className="product_optinons">
        <Link to="/userManagement/Roles">
          <button onClick={handleUpdateRole} className="btn btn-primary btn-sm">
            Update Roles
          </button>
        </Link>
      </td>
    </tr>
  );
}

export default UserManagerItem;
