import './style.css'
import {useSpring, animated} from 'react-spring'

export default function Dot(data) {

    const fade = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    return (
        <animated.div
            style={fade}
            className='redDot'
        />
    )
}