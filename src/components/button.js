import React from "react";
import { setTimeFrame } from "../features/hourSlice";
import { useDispatch, useSelector } from "react-redux";

const Button = ({ id, filter }) => {
  const dispatch = useDispatch();
  const defaultTimeFrame = useSelector((store) => store.hours);

  return (
    <input
      key={id}
      name="filterGroup"
      id={id}
      value={filter}
      type="radio"
      //   pass id into onClick to update timeframe state
      onClick={() => {
        dispatch(setTimeFrame(id));
      }}></input>
  );
};
export default Button;
