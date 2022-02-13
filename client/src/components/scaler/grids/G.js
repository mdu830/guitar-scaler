import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import { useState } from 'react'

export default function G(scaleData) {

    const data = gridData.G

    const section1 = scaleData.data.section1[0]
    const section2 = scaleData.data.section2[0]
    const section3 = scaleData.data.section3[0]
    const section4 = scaleData.data.section4[0]
    const section5 = scaleData.data.section5[0]

    const [G, setG] = useState([
        // Remove repeated isDot values except false isDot values in this damn array of objects
        ...section1.G.splice(false), 
        ...section2.G.splice(true), 
        ...section3.G.splice(true), 
        ...section4.G.splice(true), 
        ...section5.G.splice(true)
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