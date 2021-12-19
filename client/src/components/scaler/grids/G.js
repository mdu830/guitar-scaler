import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'


export default function G(scaleData) {

    const data = gridData.G

    const scale = scaleData.data;

    return (
        <div>
            {/* High e String */}
            <Grid container id="G">
                {data.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div id={fret.id} className={scale[index].isDot ? 'redDot' : 'dot'}>
                
                        </div>
                    </div>
                ))}
            </Grid>
        </div>
    )
}