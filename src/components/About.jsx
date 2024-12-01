import Box from "./Box.jsx";
import boss  from ".././img/home.jpg"
import CircularText from "./CircularText.jsx";
import Card from "./Card.jsx";
import {aboutItems, imagesArr} from "../utils/index.js";
const About = () => {
    return (
        <div className="relative overflow-hidden  w-full p-5 dark:bg-black dark:text-white-500 ">
            <div className=" mx-auto relative inline bg-red text-center">
                <p className="text-captilize text-lg font-sans font-semibold">Introduction</p>
                <h1 className="text-5xl font-primary mt-3">About me</h1>
            </div>
            <div className="flex-gap flex-col gap-2 relative mt-14 w-full lg:flex-row items-center">
              <Box className="h-[40dvh] w-full lg:w-[30%]  about-image-box grid place-content-center overflow-hidden">
                  <div className=" bg-blue-500 relative h-[260px] w-[260px] rounded-full overflow-hidden">
                      <img src={boss} alt="logo" className="relative h-full w-full object-cover" />
                  </div>
                  <div className="absolute h-[160px] w-[160px] bottom-0 right-5 rounded-full overflow-hidden">
                      <CircularText/>
                  </div>
              </Box>
                <Box className="relative w-full overflow-hidden  flex flex-col items-center lg:w-[70%]">
                    <div className="about-text-box text-left overflow-hidden lg:px-12">
                        <p className="text-captilize text-[0.934rem] font-sans font-semibold px-2">I am a passionate and skilled Full Stack Developer, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I hold a Bachelor&#39;s degree in Computer Applications from M.A.K.A.U.T, graduating with a commendable CGPA of 8.35. With a strong foundation in software development, I have successfully completed multiple projects, showcasing my expertise in frontend technologies like HTML, CSS, and JavaScript, along with backend technologies such as MongoDB and Express.js. My dedication to continuous learning and problem-solving drives me to create efficient, user-friendly solutions.</p>
                    </div>
                    <div className="skils-box flex flex-col gap-3 items-center mt-3 py-3 lg:flex-row lg:px-12 w-full relative">
                        {
                            aboutItems.map((item) => (<Card key={item.id}>
                                <div className="text-3xl text-rose-500">{<item.icon/>}</div>
                                <h1 className="text-2xl font-primary opacity-90 py-5">{item.mainText}</h1>
                                <p className="text-[0.934rem] font-medium pt-5">{item.subText}</p>
                            </Card>))
                        }
                    </div>
                    <p className="text-xl font-secondary font-semibold pt-12">Using Tools </p>
                    <div className="w-full relative flex items-start gap-2 lg:px-12">
                        {
                            imagesArr.map((item) => (<div key={item.id} className="h-14 w-14 border border-black dark:border-white rounded-md grid place-content-center">
                                <img src={item.image} alt="logo" className="h-8 w-8" />
                            </div>))
                        }
                    </div>
                </Box>
            </div>
        </div>
    )
}
export default About
