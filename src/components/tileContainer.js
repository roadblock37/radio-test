import Tile from "./tile";
import { useDispatch, useSelector } from "react-redux";

const TileContainer = () => {
  const dispatch = useDispatch();
  const { defaultState } = useSelector((store) => store.hours);
};
export default TileContainer;
