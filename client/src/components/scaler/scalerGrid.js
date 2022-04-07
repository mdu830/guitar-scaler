import './style.css'
// grids
import HighE from './grids/highE'
import B from './grids/B'
import G from './grids/G'
import D from './grids/D'
import A from './grids/A'
import E from './grids/E'

export default function ScalerGrid(data) {

    const scaleData = data.data[0]
    const sliderValue = data.data[1]
    // console.log(sliderValue)
    return (
        <div>
            {/* grids */}
            <HighE data={[scaleData.highE, sliderValue]}/>
            <B data={[scaleData.B, sliderValue]}/>
            <G data={[scaleData.G, sliderValue]}/>
            <D data={[scaleData.D, sliderValue]}/>
            <A data={[scaleData.A, sliderValue]}/>
            <E data={[scaleData.E, sliderValue]}/>
        </div>
    )
}