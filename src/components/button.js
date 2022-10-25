import { useDispatch, useSelector } from "react-redux";
import hourSlice from "../features/hourSlice";
const Button = () => {
  const dispatch = useDispatch();
  const { setTimeFrame } = useSelector((store) => store.hours);
  const filters = [
    {
      id: 1,
      filter: "daily",
    },
    {
      id: 2,
      filter: "weekly",
    },
    {
      id: 3,
      filter: "monthly",
    },
  ];

  return (
    <>
      {filters.map((item) => {
        const { id, filter } = item;
        return (
            <input
              type="radio"
              name="filterGroup"
              id={filter}
              value={filter}
              key={id}
              onClick={() => dispatch()}
            />
        );
      }, [])}
      </>
  );
};

export default Button;
