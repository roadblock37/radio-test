import { useDispatch, useSelector } from "react-redux";
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
          <div>
            <label for={filter}>{filter}</label>
            <input
              type="radio"
              name="filterGroup"
              id={filter}
              key={id}
              onClick={() => dispatch(setTimeFrame)}
            />
          </div>
        );
      })}
    </>
  );
};

export default Button;
