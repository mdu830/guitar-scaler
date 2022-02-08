import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'


export default function B(scaleData) {

    const data = gridData.B

    const scale = scaleData.data;


    return (
        <div>
            {/* B String */}
            <Grid container id="B">
                {data.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div id={fret.id}
                            className={scale[index].isDot === fret.id ? 'redDot' : 'dot'}
                        >

                        </div>
                    </div>
                ))}
            </Grid>
        </div>
    )
}