import './style.css'
import { useState } from 'react'
// grids
import HighE from './grids/highE'
import Bee from './grids/B'
import Gee from './grids/G'
import Dee from './grids/D'
import Ayy from './grids/A'
import Eee from './grids/E'

export default function ScalerGrid(data) {

    const scaleData = data.data

    return (
        <div>
            {/* grids */}
            <HighE data={scaleData}/>
            <Bee data={scaleData}/>
            <Gee data={scaleData}/>
            <Dee data={scaleData}/>
            <Ayy data={scaleData}/>
            <Eee data={scaleData}/>
            {/* lines */}
            {/* <Section data={scale.sectionLines.section1} />
            <Section data={scale.sectionLines.section2} />
            <Section data={scale.sectionLines.section3} />
            <Section data={scale.sectionLines.section4} />
            <Section data={scale.sectionLines.section5} /> */}
        </div>
    )
}