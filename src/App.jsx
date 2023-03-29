import "./App.css";

//import Aos
import Aos from "aos";

//import components
import Hero from "./components/Hero";

const App = () => {
  //initialize aos
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className="overflow-hidden">
      <Hero />
    </div>
  );
};

export default App;
