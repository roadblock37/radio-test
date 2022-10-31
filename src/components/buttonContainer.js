import Button from "./button";
import { useSelector, useDispatch } from "react-redux";

const ButtonContainer = () => {
  const { defaultFilter } = useSelector((store) => store.hours);

  return (
    <div className="filter-container">
      {defaultFilter.map((item) => {
        return <Button key={item.id} {...item} />;
      })}
    </div>
  );
};
export default ButtonContainer;
