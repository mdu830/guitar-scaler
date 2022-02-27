import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'

export default function HighE(scaleData) {

    const data = gridData.highE

    const frets = scaleData.data

    // console.log(frets)

    return (

        <div>
            {/* High e String */}
            <Grid container id="highE" >
                {data.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div id={fret.id}>
                            {frets.map((finger, index) => {
                                if(finger === fret.id) {
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