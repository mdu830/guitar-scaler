import './style.css'
// import Xarrow from "react-xarrows";
// grids
import HighE from './grids/highE'
import B from './grids/B'
import G from './grids/G'
import D from './grids/D'
import A from './grids/A'
import E from './grids/E'
// // import EmScaleSections from './scales/Em/sectionLines'
export default function ScalerGrid() {
    return (
        <div>
            <HighE />
            <B />
            <G />
            <D />
            <A />
            <E />
            {/* <EmScaleSections /> */}
        </div>
    )
}