import './style.css'

export default function Dot(data) {
    const id = data.data

    return (
            <div
                id={id}
                className='redDot'
            />
    )
}