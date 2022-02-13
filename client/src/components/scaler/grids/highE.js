import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import { useState } from 'react'



export default function HighE(scaleData) {

    const data = gridData.highE

    const section1 = scaleData.data.section1[0].highE
    const section2 = scaleData.data.section2[0].highE
    const section3 = scaleData.data.section3[0].highE
    const section4 = scaleData.data.section4[0].highE
    const section5 = scaleData.data.section5[0].highE

    const [highE, setHighE] = useState([
        // Remove first index of each array except section1
        ...section1.splice(false), 
        ...section2.splice(true), 
        ...section3.splice(true), 
        ...section4.splice(true), 
        ...section5.splice(true)
    ])

    // console.log(highE)
    return (
        
        <div>
            {/* High e String */}
            <Grid container id="highE" >
                {data.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div
                            id={fret.id}
                            className={highE[index].isDot === fret.id ? 'redDot' : 'dot'}
                                
                        />
                    </div>
                ))}
            </Grid>
        </div>
    )
}