import banner from "../img/home.jpg";
import Box from "./Box";

import emoji from  "../animations/happyemoji.json"
import HomeText from  "./HomeText"
import AnimationBox from "../animations/AnimationBox";
import ButtonA from "./ButtonA.jsx";
const Home = () => {
  return (
    <div className="relative overflow-hidden w-full h-full  px-5 flex flex-col dark:bg-black dark:text-white-500  sm:px-12 lg:flex-row">
      <Box className="bg-slate-700 dark:bg-white-500 lg:py-8">
        <div className="home-path h-full w-full">
          <img
            src={banner}
            alt="home"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className=" absolute overflow-hidden text-center -right-6 bottom-2 text-4xl font-primary -rotate-45 text-white-500 dark:text-orange lg:bottom-14 lg:right-0">
          <h1 className="positive">Be Positive </h1>
          <h1 className="positive">Vibe</h1>
        </div>
      </Box>
      <Box className="left-box ">
          <div className="h-full w-full relative">
              <div className="relative overflow-hidden text-center h-24">
                  <h1 className="text-7xl font-primary">Biswajit</h1>
                  <AnimationBox className="absolute top-0 right-[10%] sm:right-[20%] h-full" animation={emoji}/>
              </div>
              <HomeText/>
              <div className="hidden lg:flex justify-between  w-full relative  px-12 mt-4">
                <ButtonA href="/#contact" className="px-5  py-2 text-xl border-2 border-black dark:border-white-500 rounded-md hover:bg-orange text-captilize font-primary">Contact me</ButtonA>
                <ButtonA href="/#contact" className="px-5  py-2 text-xl hover:border-2 border-black dark:border-white-500 rounded-md bg-orange hover:bg-transparent text-captilize font-primary">Resume</ButtonA>
              </div>
          </div>
      </Box>
        <div className="year-box text-orange overflow-hidden h-20  sm:text-white-500 dark:text-orange absolute top-0 z-20">
            <h1 className="font-secondary font-extrabold text-7xl relative">
                2025
            </h1>
        </div>
    </div>
  );
};

export default Home;
