import Xarrow from "react-xarrows";

export default function Section1(data) {

    const sectionLines = data.data;

    // console.log(sectionLines[0].color)

    return (
        <div>
            {sectionLines.map((line, index) => (
                <Xarrow
                    key={index}
                    start={line.start}
                    end={line.end}
                    color={'green'}
                    showHead={false}
                    strokeWidth={4}
                    curveness={0.9}
                />
            ))}
        </div>
    )
}