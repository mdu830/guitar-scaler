import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import { useState } from 'react'



export default function HighE(scaleData) {

    const data = gridData.highE

    const section1 = scaleData.data.section1[0]
    const section2 = scaleData.data.section2[0]
    const section3 = scaleData.data.section3[0]
    const section4 = scaleData.data.section4[0]
    const section5 = scaleData.data.section5[0]

    const [highE, setHighE] = useState([
        // Remove repeated isDot values except false isDot values in this damn array of objects
        ...section1.highE.splice(false), 
        ...section2.highE.splice(true), 
        ...section3.highE.splice(true), 
        ...section4.highE.splice(true), 
        ...section5.highE.splice(true)
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