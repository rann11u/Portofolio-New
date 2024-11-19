import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Mytrip from './components/Mytrip';
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Mytrip></Mytrip>
      <Contact></Contact>
    </div>
  );
}

export default App;
