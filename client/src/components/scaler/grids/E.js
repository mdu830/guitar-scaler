/* eslint-disable array-callback-return */
import './style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import Dot from '../scales/elements/dots/Dot'

export default function E(scaleData) {

    const data = gridData.E
    const dots = scaleData.data[0]

    return (
        <div>
            {/* E String */}
            <Grid container id="E" >
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