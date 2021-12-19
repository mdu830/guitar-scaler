import Xarrow from "react-xarrows";
import EmScale from '../../EmScale';



export default function Section2() {

    const sectionLines = EmScale.sectionLines[1].section2;

    console.log(sectionLines)

    return (
        <div>
            {sectionLines.map((line, index) => (
                <Xarrow
                    key={index}
                    start={line.start}
                    end={line.end}
                    color='rgba(255, 0, 0, 0.841)'
                    showHead={false}
                    strokeWidth={3}
                    curveness={0.9}
                />
            ))}
        </div>
    )
}