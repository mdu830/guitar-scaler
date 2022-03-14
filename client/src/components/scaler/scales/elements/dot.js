import { useState } from 'react'
import HoverSection from './HoverSection'
export default function Dot(data) {
    // add on click here event for sound here
    const id = data.data[0]
    const [show, setShow] = useState(false)
    const arrow = data.data[1]
    // console.log(arrow)
    return (
        <div>
            <div
                id={id}
                className='redDot'
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)} />
                { show ? <HoverSection data={[id, arrow]} /> : <div /> }
        </div>
    )
}