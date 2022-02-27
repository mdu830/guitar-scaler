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