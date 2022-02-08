import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'


export default function D(scaleData) {

    const data = gridData.D

    const scale = scaleData.data;

    return (
        <div>
            {/* D String */}
            <Grid container id="D">
                {data.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div id={fret.id}
                            className={scale[index].isDot === fret.id ? 'redDot' : 'dot'}
                        ></div>
                    </div>
                ))}
            </Grid>
        </div>
    )
}