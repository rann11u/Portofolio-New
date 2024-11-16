import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About></About>
      <Skill></Skill>
      <Project></Project>
    </div>
  );
}

export default App;
