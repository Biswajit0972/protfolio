
import Lottie from 'lottie-react'
const AnimationBox = ({className, animation, loop=true}) => {
  return (
    <Lottie className={className} animationData={animation} loop={loop}/>
  )
}

export default AnimationBox