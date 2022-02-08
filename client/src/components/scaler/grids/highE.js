import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'



export default function HighE(scaleData) {

    const data = gridData.highE

    const scale = scaleData.data;
    // console.log(scale)
    return (
        <div>
            {/* High e String */}
            <Grid container id="highE" >
                {data.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div
                            id={fret.id}
                            className={scale[index].isDot === fret.id ? 'redDot' : 'dot'}
                        />
                    </div>
                ))}
            </Grid>
        </div>
    )
}