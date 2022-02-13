import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import { useState } from 'react'

export default function B(scaleData) {

    const data = gridData.B

    const section1 = scaleData.data.section1[0].B
    const section2 = scaleData.data.section2[0].B
    const section3 = scaleData.data.section3[0].B
    const section4 = scaleData.data.section4[0].B
    const section5 = scaleData.data.section5[0].B

    const [B, setB] = useState([
        // Remove first index of each array except section1
        ...section1.splice(false), 
        ...section2.splice(true), 
        ...section3.splice(true), 
        ...section4.splice(true), 
        ...section5.splice(true)
    ])
    // console.log(scale)

    return (
        <div>
            {/* B String */}
            <Grid container id="B">
                {data.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div id={fret.id}
                            className={B[index].isDot === fret.id ? 'redDot' : 'dot'}
                        >

                        </div>
                    </div>
                ))}
            </Grid>
        </div>
    )
}