import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import { useState } from 'react'


export default function A(scaleData) {

    const data = gridData.A
    const frets = scaleData.data

    console.log(frets)

    return (

        <div>
            {/* A String */}
            <Grid container id="A" >
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