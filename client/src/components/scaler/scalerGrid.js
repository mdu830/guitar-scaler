import './style.css'
// grids
import HighE from './grids/highE'
import B from './grids/B'
import G from './grids/G'
import D from './grids/D'
import A from './grids/A'
import E from './grids/E'
// keys
import Em from './scales/Em/EmScale'
import Section1 from './scales/Em/lines/sectionLines/section1'
import Section2 from './scales/Em/lines/sectionLines/section2'
import Section3 from './scales/Em/lines/sectionLines/section3'


export default function ScalerGrid() {
    // console.log(Em)
    return (
        <div>
            <HighE data={Em.highE}/>
            <B data={Em.B}/>
            <G data={Em.G}/>
            <D data={Em.D}/>
            <A data={Em.A}/>
            <E data={Em.E}/>
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}