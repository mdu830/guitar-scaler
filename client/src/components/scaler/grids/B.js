import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import { useState } from 'react'

export default function B(scaleData) {

    const data = gridData.B

    const frets = scaleData.data

    // console.log(frets)

    return (

        <div>
            {/* B String */}
            <Grid container id="B" >
                {data.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div id={fret.id}>
                            {frets.map((finger, index) => {
                                if (finger === fret.id) {
                                    return <div key={index} className='redDot' />
                                }
                            }
                            )}
                        </div>
                    </div>
                ))}
            </Grid>
        </div>
    )
}