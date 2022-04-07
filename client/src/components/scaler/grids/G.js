/* eslint-disable array-callback-return */
import './style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import Dot from '../scales/elements/dots/Dot'

export default function G(scaleData) {

    const data = gridData.G
    const dots = scaleData.data[0]

    return (
        <div>
            {/* G String giggity */}
            <Grid container id="G" >
                {data.map((fret, index) =>
                    <div key={index} className={`${fret.className} fret`}>
                        {
                            dots.map((dot) => {
                                if (dot === fret.id) {
                                    return <Dot
                                        key={index}
                                        id={fret.id}
                                        data={scaleData.data[1]} />
                                }
                            })
                        }
                    </div>
                )}
            </Grid>
        </div>
    )
}