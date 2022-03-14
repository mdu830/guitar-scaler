/* eslint-disable array-callback-return */
import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import Dot from '../scales/elements/Dot'

export default function B(scaleData) {

    const data = gridData.B

    const dots = scaleData.data[0]
    const arrows = scaleData.data[1]
    // console.log(frets)

    return (

        <div>
            {/* B String */}
            <Grid container id="B" >
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
                                ? <div key={index} id={fret.id} className='dot' />
                                : <Dot key={index} data={[fret.id, arrows]}/>
                        }
                    </div>
                )}
            </Grid>
        </div>
    )
}