import {projectItems} from "../utils/index.js"
import Card from "./Card.jsx";
import TextExpender from "./TextExpender.jsx";
import { LuProjector } from "react-icons/lu";
import { TbBrandVercel } from "react-icons/tb"
import ButtonA from "./ButtonA.jsx";
const Project = () => {

    return (
        <div className="relative  w-full px-5 lg:px-12 py-5  dark:bg-black text-black dark:text-white">
            <div className=" mx-auto relative inline bg-red text-center">
                <p className="text-captilize text-lg font-sans font-semibold">Check out my</p>
                <h1 className="text-5xl font-primary mt-3">Latest project</h1>
            </div>
            <div className="grid place-content-center grid-rows-3 w-full relative  gap-2 py-12 md:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
                {
                    projectItems.map((item) => (<Card key={item.id}>
                        <div className="text-2xl text-rose-500">
                          <LuProjector/>
                        </div>
                        <div className="relative w-full z-20 mt-2">
                            <h1 className="text-lg font-primary">{item.projectHeading}</h1>
                            <TextExpender text={item.description}   limit={20} className="text-sm"/>
                        </div>
                        <div className="relative w-full z-20 mt-2 flex-between">
                            <ButtonA href={item.liveLink} className="px-4  py-1 text-lg border-2 border-black dark:border-white-500 rounded-md hover:bg-orange text-captilize font-primary">
                             Live
                            </ButtonA>
                            <ButtonA href={item.githubLink} className="px-4  py-1  text-lg hover:border-2 border-black dark:border-white-500 rounded-md bg-orange hover:bg-transparent text-captilize font-primary">Git hub</ButtonA>
                        </div>
                    </Card>))
                }
            </div>
        </div>
    )
}
export default Project
