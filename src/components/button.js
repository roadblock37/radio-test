import React from "react";
import { setTimeFrame } from "../features/hourSlice";
import { useDispatch, useSelector } from "react-redux";

const Button = ({ id, filter }) => {
  const dispatch = useDispatch();
  const {defaultTimeFrame} = useSelector((store) => store.hours);

  // if (defaultTimeFrame === "weekly") {
  //   return (
  //     <div>
  //       <label for={filter}>{filter}</label>
  //     <input
  //       key={id}
  //       name="filterGroup"
  //       id={id}
  //       value={filter}
  //       type="radio"
  //       checked={true}
  //       //   pass id into onClick to update timeframe state
  //       onClick={() => {
  //         dispatch(setTimeFrame(id));
  //       }}></input>
  //     </div>
      
  //   );
  // }

  return (
    <div>
      <label for={filter}>{filter}</label>
    <input
      key={id}
      name="filterGroup"
      id={id}
      value={filter}
      type="radio"
      checked={defaultTimeFrame === filter}
      //   pass id into onClick to update timeframe state
      onClick={() => {
        dispatch(setTimeFrame(id));
      }}></input>
    </div>
    
  );
};
export default Button;
