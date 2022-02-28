/* eslint-disable array-callback-return */
import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'

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