import React from "react";
import { setTimeFrame } from "../features/hourSlice";
import { useDispatch, useSelector } from "react-redux";

const Button = ({ id, filter }) => {
  const dispatch = useDispatch();
  const defaultTimeFrame = useSelector((store) => store.hours);

  return (
    <div>
      <label for={filter}>{filter}</label>
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
    </div>
    
  );
};
export default Button;
