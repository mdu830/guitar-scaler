import '../style.css'
import Grid from '@mui/material/Grid'

export default function E(data) {

    const fingerPlacement = data.data
    // console.log(fingerPlacement)
    return (
        <div>
            {/* High e String */}
            <Grid container id="E">
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