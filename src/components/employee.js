import ButtonContainer from "./buttonContainer";
const Employee = () => {
  return (
    <div className="employee-container">
      <section className="employee-card">
        <div className="img-border">
          <img
            src="../images/image-jeremy.png"
            alt="employee"
            height="78px"
            width="78px"></img>
        </div>

        <div className="employee-info">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </section>
      <ButtonContainer />
    </div>
  );
};
export default Employee;
