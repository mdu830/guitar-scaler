import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import { useState } from 'react'


export default function E(scaleData) {

    const data = gridData.E
    // console.log(data)
    const section1 = scaleData.data.section1[0]
    const section2 = scaleData.data.section2[0]
    const section3 = scaleData.data.section3[0]
    const section4 = scaleData.data.section4[0]
    const section5 = scaleData.data.section5[0]

    const [E, setE] = useState([
        // Remove repeated isDot values except false isDot values in this damn array of objects
        ...section1.E.splice(false), 
        ...section2.E.splice(true), 
        ...section3.E.splice(true), 
        ...section4.E.splice(true), 
        ...section5.E.splice(true)
    ])

    return (
        <div>
            {/* High e String */}
            <Grid container id="E">
                {data.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div id={fret.id}
                            className={E[index].isDot === fret.id ? 'redDot' : 'dot'}
                        />
                    </div>
                ))}
            </Grid>
        </div>
    )
}