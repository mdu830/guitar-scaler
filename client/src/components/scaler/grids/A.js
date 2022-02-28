/* eslint-disable array-callback-return */
import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'

export default function A(scaleData) {

    const data = gridData.A
    const frets = scaleData.data

    // console.log(frets)

    return (

        <div>
            {/* A String */}
            <Grid container id="A" >
                {data.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div >
                            {frets.map((finger, index) => {
                                if (finger === fret.id) {
                                    return <div key={index} id={fret.id} className='redDot' />
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