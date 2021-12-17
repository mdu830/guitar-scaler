import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'


export default function B() {

    const data = gridData.B

    return (
        <div>
            {/* High e String */}
            <Grid container id="B">
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