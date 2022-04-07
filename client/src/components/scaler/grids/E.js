/* eslint-disable array-callback-return */
import './style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import Dot from '../scales/elements/dots/Dot'

export default function E(scaleData) {

    const data = gridData.E
    const dots = scaleData.data[0]
    const arrows = scaleData.data[1]
    // console.log(arrows)

    return (

        <div>
            {/* E String */}
            <Grid container id="E" >
                {data.map((fret, index) =>
                    <div key={index} className={fret.className}>
                        {/* this is forced and is incorrect maybe forEach will fix*/
                            dots[0] !== fret.id
                                && dots[1] !== fret.id
                                && dots[2] !== fret.id
                                && dots[3] !== fret.id
                                && dots[4] !== fret.id
                                && dots[5] !== fret.id
                                && dots[6] !== fret.id
                                ? <div key={index} className='dot' />
                                : <Dot key={index} id ={fret.id} data={scaleData.data[1]}/>
                        }
                    </div>
                )}
            </Grid>
        </div>
    )
}