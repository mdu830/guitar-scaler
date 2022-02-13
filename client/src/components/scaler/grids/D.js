import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import { useState } from 'react'



export default function D(scaleData) {

    const data = gridData.D

    const section1 = scaleData.data.section1[0].D
    const section2 = scaleData.data.section2[0].D
    const section3 = scaleData.data.section3[0].D
    const section4 = scaleData.data.section4[0].D
    const section5 = scaleData.data.section5[0].D

    const [D, setD] = useState([
        // Remove first index of each array except section1
        ...section1.splice(false), 
        ...section2.splice(true), 
        ...section3.splice(true), 
        ...section4.splice(true), 
        ...section5.splice(true)
    ])

    return (
        <div>
            {/* D String */}
            <Grid container id="D">
                {data.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div id={fret.id}
                            className={D[index].isDot === fret.id ? 'redDot' : 'dot'}
                        ></div>
                    </div>
                ))}
            </Grid>
        </div>
    )
}