import './style.css'
// grids
import HighE from './grids/highE'
import B from './grids/B'
import G from './grids/G'
import D from './grids/D'
import A from './grids/A'
import E from './grids/E'
// sections
import Section from './scales/section'

export default function ScalerGrid(data) {

    const scaleData = data.data[0]
    const lineData = data.data[1]
    // console.log(scaleData)
    
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
            {lineData.map((section, index) => {
                // console.log(scaleData.section[index])
                return scaleData.section[index] ? <Section key={index} data={lineData[index]}/> : <div key={index} />
            })}


        </div>
    )
}