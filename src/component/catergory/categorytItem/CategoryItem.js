import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getACategorys } from "../../redux/action/CategoryAction";
import { changeStatusForm } from "../../redux/action/statusFormAction";
function CategoryItem(props) {
  const statusForm = useSelector((state) => state.statusFormReducer.status);
  const dispatch = useDispatch();
  const handleDelete = () => {
    props.handleDelete(props.data.id);
  };
  const handleUpdate = () => {
    dispatch(getACategorys(props.data.id));
    if (statusForm !== true) {
      dispatch(changeStatusForm());
    }
  };
  return (
    <tr>
      <td className="budget">{props.data.id} </td>
      <td>
        <span className="badge badge-dot mr-4">
          <span className="status">{props.data.name} </span>
        </span>
      </td>
      <td>
        <span className="badge badge-dot mr-4">
          <span className="status">{props.data.createdOn} </span>
        </span>
      </td>
      <td>
        <span className="badge badge-dot mr-4">
          <span className="status">{props.data.updatedOn} </span>
        </span>
      </td>
      <td className="product_optinons">
        <div className="row">
          <button
            onClick={handleUpdate}
            type="button"
            className="btn btn-warning btn-sm"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            type="button"
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CategoryItem;
