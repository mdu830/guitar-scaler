import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'


export default function G() {

    const data = gridData.G

    return (
        <div>
            {/* High e String */}
            <Grid container id="G">
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