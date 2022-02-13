import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import { useState } from 'react'

export default function B(scaleData) {

    const data = gridData.B

    const section1 = scaleData.data.section1[0]
    const section2 = scaleData.data.section2[0]
    const section3 = scaleData.data.section3[0]
    const section4 = scaleData.data.section4[0]
    const section5 = scaleData.data.section5[0]

    const [B, setB] = useState([
        // Remove repeated isDot values except false isDot values in this damn array of objects
        ...section1.B.splice(false), 
        ...section2.B.splice(true), 
        ...section3.B.splice(true), 
        ...section4.B.splice(true), 
        ...section5.B.splice(true)
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