import './style.css'
import Section from './scales/section'
// grids
import HighE from './grids/highE'
import B from './grids/B'
import G from './grids/G'
import D from './grids/D'
import A from './grids/A'
import E from './grids/E'

export default function ScalerGrid(data) {
    // console.log(data.data.sectionLines.section1[0].highE)
    const scale = data.data
    return (
        <div>
            {/* grids */}
            <HighE data={scale.highE}/>
            <B data={scale.B}/>
            <G data={scale.G}/>
            <D data={scale.D}/>
            <A data={scale.A}/>
            <E data={scale.E}/>
            {/* lines */}
            <Section data={scale.sectionLines.section1} />
            <Section data={scale.sectionLines.section2} />
            <Section data={scale.sectionLines.section3} />
            <Section data={scale.sectionLines.section4} />
            <Section data={scale.sectionLines.section5} />
        </div>
    )
}