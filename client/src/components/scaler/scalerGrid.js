import './style.css'
// grids
import HighE from './grids/highE'
import B from './grids/B'
import G from './grids/G'
import D from './grids/D'
import A from './grids/A'
import E from './grids/E'
// scales
import scaleData from './scales/Em/EmScale'
// lines
import Section from './scales/Em/lines/sectionLines/section'



export default function ScalerGrid() {
    // console.log(scaleData.sectionLines.section1)
    return (
        <div>
            {/* grids */}
            <HighE data={scaleData.highE}/>
            <B data={scaleData.B}/>
            <G data={scaleData.G}/>
            <D data={scaleData.D}/>
            <A data={scaleData.A}/>
            <E data={scaleData.E}/>
            {/* lines */}
            <Section data={scaleData.sectionLines.section1} />
            <Section data={scaleData.sectionLines.section2} />
            <Section data={scaleData.sectionLines.section3} />
            <Section data={scaleData.sectionLines.section4} />
            <Section data={scaleData.sectionLines.section5} />
        </div>
    )
}