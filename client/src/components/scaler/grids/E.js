import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'


export default function E(scaleData) {

    const data = gridData.E
    // console.log(data)
    const scale = scaleData.data;

    return (
        <div>
            {/* High e String */}
            <Grid container id="E">
                {data.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div id={fret.id}
                            className={scale[index].isDot === fret.id ? 'redDot' : 'dot'}
                        />
                    </div>
                ))}
            </Grid>
        </div>
    )
}