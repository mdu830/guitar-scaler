import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'



export default function HighE() {
    
    const data = gridData.highE

    return (
        <div>
            {/* High e String */}
            <Grid container id="highE" >
                {data.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div id={fret.id} className={fret.isDot ? 'redDot' : 'dot'}>
                
                        </div>
                    </div>
                ))}
            </Grid>
        </div>
    )
}