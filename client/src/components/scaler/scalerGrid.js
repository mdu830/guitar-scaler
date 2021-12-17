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
import eMinorKey from './scales/Em/EmScale'
// import EmScaleSections from './scales/Em/sectionLines'
export default function ScalerGrid() {
    const defaultKey = eMinorKey;
    // console.log(defaultKey.E)
    return (
        <div>
            <HighE data={defaultKey.highE} />
            {/* <B data={defaultKey.B} />
            <G data={defaultKey.G} />
            <D data={defaultKey.D} />
            <A data={defaultKey.A} />
            <E data={defaultKey.E} /> */}
            {/* <EmScaleSections /> */}
        </div>
    )
}