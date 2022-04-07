/* eslint-disable array-callback-return */
import './style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import Dot from '../scales/elements/dots/Dot'

export default function HighE(scaleData) {

    const data = gridData.highE
    const dots = scaleData.data[0]

    return (
        <div>
            {/* High e String */}
            <Grid container id="highE" >
                {data.map((fret, index) =>
                    <div key={index} className={fret.className}>
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