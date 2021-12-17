import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'


export default function A() {

    const data = gridData.A

    return (
        <div>
            {/* High e String */}
            <Grid container id="A">
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