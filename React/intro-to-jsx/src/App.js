import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <div>
        <h1 style = {
        {
          color: 'Red',
        }
        }>Styling React Elements</h1>
        <p style = {
          {
            border: '1px solid red',
            width: '500px',
            margin: 'auto',
            padding: '50px',
            boxShadow: '5px 5px 5px red inset'
          }
        }>This is an introduction to JSX Styling React Elements</p>
      </div>
    </div>
  );
}

export default App;
