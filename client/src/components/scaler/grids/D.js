import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import { useState } from 'react'



export default function D(scaleData) {

    const data = gridData.D

    const section1 = scaleData.data.section1[0]
    const section2 = scaleData.data.section2[0]
    const section3 = scaleData.data.section3[0]
    const section4 = scaleData.data.section4[0]
    const section5 = scaleData.data.section5[0]

    const [D, setD] = useState([
        // Remove repeated isDot values except false isDot values in this damn array of objects
        ...section1.D.splice(false), 
        ...section2.D.splice(true), 
        ...section3.D.splice(true), 
        ...section4.D.splice(true), 
        ...section5.D.splice(true)
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