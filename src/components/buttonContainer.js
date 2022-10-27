import Button from "./button";
import { useSelector, useDispatch } from "react-redux";

const ButtonContainer = () => {
  const dispatch = useDispatch();
  const { defaultFilter } = useSelector((store) => store.hours);

  return (
    <div>
      {defaultFilter.map((item) => {
        return <Button key={item.id} {...item} />;
      })}
    </div>
  );
};
export default ButtonContainer;
