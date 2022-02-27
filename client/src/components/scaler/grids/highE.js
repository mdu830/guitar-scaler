import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import { useEffect, useState } from 'react'



export default function HighE(scaleData) {

    const data = gridData.highE

    const frets = scaleData.data

    console.log(frets)

    return (

        <div>
            {/* High e String */}
            <Grid container id="highE" >
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