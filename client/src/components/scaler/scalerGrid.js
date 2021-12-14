import './style.css'
import HighE from './grids/highE'
import B from './grids/B'
import G from './grids/G'
import D from './grids/D'
import A from './grids/A'
import E from './grids/E'


export default function ScalerGrid() {
    return (
        <div>
            {/* each grid needs a for loop to reduce repetitive lines of code */}
            <HighE />
            <B />
            <G />
            <D />
            <A />
            <E />
        </div>
    )
}