import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import { useState } from 'react'


export default function A(scaleData) {

    const data = gridData.A

    const section1 = scaleData.data.section1[0]
    const section2 = scaleData.data.section2[0]
    const section3 = scaleData.data.section3[0]
    const section4 = scaleData.data.section4[0]
    const section5 = scaleData.data.section5[0]

    const [A, setA] = useState([
        // Remove repeated isDot values except false isDot values in this damn array of objects
        ...section1.A.splice(false), 
        ...section2.A.splice(true), 
        ...section3.A.splice(true), 
        ...section4.A.splice(true), 
        ...section5.A.splice(true)
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