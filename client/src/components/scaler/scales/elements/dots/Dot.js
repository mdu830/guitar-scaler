import './style.css'
import { useSpring, animated } from 'react-spring'

export default function Dot(data) {
    console.log(data.data)

    const fade = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    // const slideRight = useSpring({to: { x: 0 }, from: { x: -25 * data.data }})
 
    return (
        <animated.div
            style={fade}
            className='redDot'
        />
    )
}