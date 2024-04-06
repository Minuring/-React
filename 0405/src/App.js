import logo from './logo.svg';
import './App.css';
import Header from "./jsxCode/Header.jsx"
import Main from "./jsxCode/Main.jsx"

function App() {
  const bodyStyle = {
    width : "80%",
    marginLeft: "10%",
    marginRight: "10%",
    fontSize: "large"
  };
  return (
    <div className="Main" style={bodyStyle}>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
