import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'


export default function A(scaleData) {

    const data = gridData.A

    const scale = scaleData.data;

    return (
        <div>
            {/* A String */}
            <Grid container id="A">
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