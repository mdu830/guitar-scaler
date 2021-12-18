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
// // import EmScaleSections from './scales/Em/sectionLines'

export default function ScalerGrid() {
    // console.log(Em)
    return (
        <div>
            <HighE data={Em}/>
            <B />
            <G />
            <D />
            <A />
            <E />
            {/* <EmScaleSections /> */}
        </div>
    )
}