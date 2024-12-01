import React from 'react'
import AnimationBox from '../animations/AnimationBox'
import an1 from "../animations/long.json"
import coder from "../animations/coder.json"
const HomeText = () => {
  return (
    <div className="flex-gap flex-col gap-3  relative overflow-hidden t">
      <div className="relative flex flex-col items-center justify-between">
        <p className="text-lg font-primary opacity-90">
          hey there,👨‍💻 I am a <span className="font-secondary">Next Js </span>
          developer and a{" "}
          <span className="font-secondary">problem solver 🎡</span> with solid
          knowladge.
        </p>
        <p className="text-lg font-primary opacity-90">
          Lived in INDIA, transfroming idea into the reality.🚀
        </p>
      </div>
      <div className=" relative w-full text-center overflow-hidden flex-between  h-36">
        <div className="w-[20%]  h-full">
          <AnimationBox animation={an1} className="h-full w-full"/>
        </div>
        <div className="relative overflow-hidden">
          <p className="font-primary text-2xl">🎂Brith Day In tech <span className="font-secondary">28oct 2022</span></p>
          <p className="font-secondary text-3xl">Age: <span className="font-primary text-2xl">3</span> year</p>
      </div>
      <div className="w-[20%] h-full relative">
        <AnimationBox animation={coder}  className="h-full w-full"/>
      </div>
    </div>
  
  </div>
  )
}

export default HomeText