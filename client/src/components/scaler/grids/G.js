import '../style.css'
import Grid from '@mui/material/Grid'

export default function G(data) {

    const fingerPlacement = data.data

    return (
        <div>
            {/* High e String */}
            <Grid container id="G">
                {fingerPlacement.map((fret, index) => (
                    <div key={index} className={fret.className}>
                        <div id={fret.id} className={fret.isDot ? 'redDot' : 'dot'}>
                
                        </div>
                    </div>
                ))}
            </Grid>
        </div>
    )
}