import Button from "./button";
import { useSelector} from "react-redux";

const ButtonContainer = () => {
  const { defaultFilter } = useSelector((store) => store.hours);
/*map through the filter list 
and render a button for each item*/
  return (
    <div className="filter-container">
      {defaultFilter.map((item) => {
        return <Button key={item.id} {...item} />;
      })}
    </div>
  );
};
export default ButtonContainer;
