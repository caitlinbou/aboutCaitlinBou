import "./App.css";
import Nav from "./components/Nav";
import Background from "./components/Background";

function App() {
  return (
    <div className="bg">
      <Background>
        <Nav></Nav>
      </Background>
    </div>
  );
}

export default App;
