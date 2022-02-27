import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import { useState } from 'react'


export default function E(scaleData) {

    const data = gridData.E
    const frets = scaleData.data

    console.log(frets)

    return (

        <div>
            {/* E String */}
            <Grid container id="E" >
                {data.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div id={fret.id}>
                            {frets.map((finger, index) =>
                                finger === fret.id ?
                                    <div key={index} className='redDot' />
                                    :
                                    <div key={index} className='dot' />
                            )}
                        </div>
                    </div>
                ))}
            </Grid>
        </div>
    )
}