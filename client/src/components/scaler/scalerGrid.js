import './style.css'
// import Xarrow from "react-xarrows";
// grids
import HighE from './grids/highE'
import B from './grids/B'
import G from './grids/G'
import D from './grids/D'
import A from './grids/A'
import E from './grids/E'
// keys
import gridData from './scales/Em/gridData'
// import EmScaleSections from './scales/Em/sectionLines'
export default function ScalerGrid() {
    return (
        <div>
            <HighE data={gridData.highE} />
            <B data={gridData.B} />
            <G data={gridData.G} />
            <D data={gridData.D} />
            <A data={gridData.A} />
            <E data={gridData.E} />
            {/* <EmScaleSections /> */}
        </div>
    )
}