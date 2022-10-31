import ButtonContainer from "./buttonContainer";
const Employee = () => {
    return (
        <div className="employee-container">
            <section className="employee-card">
          <img src="../images/image-jeremy.png" alt="employee"></img>
          <div className="employee-info">
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </section>
          <ButtonContainer/>
        </div>
        

    );
}
        export default Employee;