import './style.css'
import {useSpring, animated} from 'react-spring'

export default function Dot(data) {
    const id = data.data
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    return (
        <animated.div
            id={id}
            style={props}
            className='redDot'
        />
    )
}