import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'


export default function A(scaleData) {

    const data = gridData.A

    const scale = scaleData.data;

    return (
        <div>
            {/* High e String */}
            <Grid container id="A">
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