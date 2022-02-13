import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import { useState } from 'react'

export default function G(scaleData) {

    const data = gridData.G

    const section1 = scaleData.data.section1[0].G
    const section2 = scaleData.data.section2[0].G
    const section3 = scaleData.data.section3[0].G
    const section4 = scaleData.data.section4[0].G
    const section5 = scaleData.data.section5[0].G

    const [G, setG] = useState([
        // Remove first index of each array except section1
        ...section1.splice(false), 
        ...section2.splice(true), 
        ...section3.splice(true), 
        ...section4.splice(true), 
        ...section5.splice(true)
    ])

    return (
        <div>
            {/* High e String */}
            <Grid container id="G">
                {data.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div id={fret.id}
                            className={G[index].isDot === fret.id ? 'redDot' : 'dot'}
                        >
                        </div>
                    </div>
                ))}
            </Grid>
        </div>
    )
}