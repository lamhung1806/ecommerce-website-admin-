import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeStatusForm } from "../../redux/action/statusFormAction";
import { updateACategorys } from "../../redux/action/CategoryAction";
import { addCategorys } from "../../redux/action/CategoryAction";

function CartegoryForm() {
  const getACategory = useSelector((state) => state.category.dataUpdate);
  const dispatch = useDispatch();
  const [dataCategory, setDataCategory] = useState({
    name: "",
  });
  useEffect(() => {
    setDataCategory(getACategory);
  }, [getACategory]);

  const handlerADD = (e) => {
    e.preventDefault();
    dispatch(addCategorys(dataCategory));
    dispatch(changeStatusForm());
  };
  const handlerUpdate = (e) => {
    e.preventDefault();

    dispatch(updateACategorys(dataCategory));

    dispatch(changeStatusForm());
  };
  return (
    <div className="container">
      <form className="add_form">
        <div className="row input_wrap">
          <label className="product_name ">Name</label>
          <input
            onChange={(e) =>
              setDataCategory({
                ...dataCategory,
                name: e.target.value,
              })
            }
            value={dataCategory.name}
            type="text"
            className="input_form"
          />
        </div>

        <button
          type="submit"
          onClick={handlerADD}
          className="btn btn-primary btn-sm submit_button"
        >
          Add
        </button>
        <button
          type="submit"
          onClick={handlerUpdate}
          className="btn btn-primary btn-sm submit_button"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default CartegoryForm;
