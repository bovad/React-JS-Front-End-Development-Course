import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = "Hamid";
  const lastName = "Ayub";
  const age = 20;
  const text = "Enter your marks"
  const getName = (fName, lName) => `${fName} ${lName}`  
  const marksInput = <input placeholder={text} autoComplete />
  const details = {
    Class: <h3>Class: BESE-9B</h3>,
    BloodGroup: "A+"
  }
  
  return (
    <div className="App">
      <h1>My Bio</h1>  
      <h3>Name: {getName(firstName, lastName)}</h3>
      <h3>Age: {age}</h3>
      {details.Class}
      {marksInput}
    </div>
  );
}

export default App;
