import Home from "./components/Home.jsx";
import Mobile from "./components/mobileNav/Mobile.jsx";
import Navbar from "./components/Navbar.jsx";
import { useNavContextHook } from "./context/Navigation.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Protfolio.jsx";
import Project from "./components/Project.jsx";
import ContactMe from "./components/ContactMe.jsx";
const App = () => {
  const { menu } = useNavContextHook();
  return (
    <div className="relative w-screen h-screen overflow-y-auto bg-[#F6F5FB]">
      <Navbar />
      {menu && <Mobile />}
      <section
        id="home"
        className="h-[calc(100vh-3.5rem)] relative w-full overflow-x-hidden "
      >
        <Home />
      </section>
      <section
        id="about"
        className="relative w-full overflow-x-hidden "
      >
      <About />
      </section>
        <section className="w-full relative overflow-x-hidden" id="portfolio">
            <Portfolio />
        </section>
        <section className=" w-full relative overflow-x-hidden" id="project">
        <Project />
        </section>
        <section className=" w-full relative overflow-x-hidden" id="contact">
         <ContactMe/>
        </section>
    </div>
  );
};
export default App;
