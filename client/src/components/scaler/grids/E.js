/* eslint-disable array-callback-return */
import '../style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'

export default function E(scaleData) {

    const data = gridData.E
    const dots = scaleData.data

    // console.log(frets)

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
                                ? <div key={index} id={fret.id} className='dot' />
                                : <div key={index} id={fret.id} className='redDot' />
                        }
                    </div>
                )}
            </Grid>
        </div>
    )
}