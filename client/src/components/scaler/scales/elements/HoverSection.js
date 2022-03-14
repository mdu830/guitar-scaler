import Xarrow from "react-xarrows";

export default function HoverSection(data) {
    const currentDot = data.data[0]
    const nextDot = data.data[1]

    return (
        nextDot[currentDot] !== undefined 
        ?
        <div>
            <Xarrow
                zIndex={+1}
                start={currentDot}
                end={nextDot[currentDot]}
                color={'lightGreen'}
                showHead={true}
                strokeWidth={2}
                curveness={0.9}
            />
        </div> 
        :
        <div />
    )
}