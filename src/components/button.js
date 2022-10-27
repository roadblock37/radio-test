import React from "react";
import { setTimeFrame } from "../features/hourSlice";
import { useDispatch, useSelector } from "react-redux";

const Button = ({ id, filter }) => {
  const dispatch = useDispatch();

  return (
    <input
      key={id}
      name="filterGroup"
      id={id}
      value={filter}
      type="radio"
      onClick={() => {
        dispatch(setTimeFrame(id));
      }}></input>
  );
};
export default Button;
