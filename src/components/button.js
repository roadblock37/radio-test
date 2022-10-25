const Button = () => {
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
          <button type="radio" key={id}>
            {filter}
          </button>
        );
      })}
    </>
  );
};

export default Button;
