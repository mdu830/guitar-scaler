import './style.css'
import HighE from './grids/highE'
import B from './grids/B'
import G from './grids/G'
import D from './grids/D'
import A from './grids/A'
import E from './grids/E'
import eMinorKey from './scales/keyMinorE'

export default function ScalerGrid() {
    const defaultKey = eMinorKey;
    // console.log(defaultKey.E)
    return (
        <div>
            <HighE data={defaultKey.highE}/>
            <B data={defaultKey.B}/>
            <G data={defaultKey.G}/>
            <D data={defaultKey.D}/>
            <A data={defaultKey.A}/>
            <E data={defaultKey.E}/>
        </div>
    )
}