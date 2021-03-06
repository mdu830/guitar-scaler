import Xarrow from "react-xarrows";

export default function Section(data) {

    const sectionLines = data.data;
    // const sectionColor = data.data.sectionLineColor

    // console.log(sectionLines)

    return (
        <div>
            {sectionLines.section.map((line, index) => (
                <Xarrow
                    key={index}
                    start={line.start}
                    end={line.end}
                    color={sectionLines.color}
                    showHead={false}
                    strokeWidth={4}
                    curveness={0.9}
                />
            ))}
        </div>
    )
}