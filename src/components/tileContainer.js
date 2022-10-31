import Tile from "./tile";
import { useDispatch, useSelector } from "react-redux";

const TileContainer = () => {
  const dispatch = useDispatch();
  const { defaultState } = useSelector((store) => store.hours);

  {
    /*map through defaultState and render a 
Tile component for each item */
  }
  return (
    <>
      {defaultState.map((item) => {
        return <Tile key={item.id} {...item} />;
      })}
    </>
      
    
  );
};
export default TileContainer;
