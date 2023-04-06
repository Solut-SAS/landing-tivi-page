import "./App.css";

//import Aos
import Aos from "aos";
import "aos/dist/aos.css";

//import components
import Hero from "./components/Hero";
import Header from "./components/Header";

const App = () => {
  //initialize aos
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default App;
