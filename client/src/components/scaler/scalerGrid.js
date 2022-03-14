import './style.css'
// grids
import HighE from './grids/highE'
import B from './grids/B'
import G from './grids/G'
import D from './grids/D'
import A from './grids/A'
import E from './grids/E'
// sections
import Section from './scales/elements/Section'

export default function ScalerGrid(data) {

    const scaleData = data.data[0]
    const lineData = data.data[1]
    const arrows = data.data[0].hoverArrows

    const handleArrows = (string) => {
        return arrows !== undefined ? arrows[string] : ''
    }
    
    return (
        <div>
            {/* grids */}
            <HighE data={[scaleData.highE, handleArrows('highE')]}/>
            <B data={[scaleData.B, handleArrows('B')]}/>
            <G data={[scaleData.G, handleArrows('G')]}/>
            <D data={[scaleData.D, handleArrows('D')]}/>
            <A data={[scaleData.A, handleArrows('A')]}/>
            <E data={[scaleData.E, handleArrows('E')]}/>
            {/* lines */}
            {lineData.map((section, index) => {
                return scaleData.section[index] 
                ? <Section key={index} data={lineData[index]}/> 
                : <div key={index} />
            })}


        </div>
    )
}