import './style.css'
import { useState } from 'react'
// grids
import HighE from './grids/highE'
import B from './grids/B'
import G from './grids/G'
import D from './grids/D'
import A from './grids/A'
import E from './grids/E'

export default function ScalerGrid(data) {

    const scaleData = data.data
    console.log(scaleData.highE)
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
            {/* <Section data={scale.sectionLines.section1} />
            <Section data={scale.sectionLines.section2} />
            <Section data={scale.sectionLines.section3} />
            <Section data={scale.sectionLines.section4} />
            <Section data={scale.sectionLines.section5} /> */}
        </div>
    )
}