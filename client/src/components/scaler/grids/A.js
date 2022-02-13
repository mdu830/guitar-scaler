import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import { useState } from 'react'


export default function A(scaleData) {

    const data = gridData.A

    const section1 = scaleData.data.section1[0].A
    const section2 = scaleData.data.section2[0].A
    const section3 = scaleData.data.section3[0].A
    const section4 = scaleData.data.section4[0].A
    const section5 = scaleData.data.section5[0].A

    const [A, setA] = useState([
        // Remove first index of each array except section1
        ...section1.splice(false), 
        ...section2.splice(true), 
        ...section3.splice(true), 
        ...section4.splice(true), 
        ...section5.splice(true)
    ])

    return (
        <div>
            {/* A String */}
            <Grid container id="A">
                {data.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div id={fret.id}
                            className={A[index].isDot === fret.id ? 'redDot' : 'dot'}
                        />
                    </div>
                ))}
            </Grid>
        </div>
    )
}