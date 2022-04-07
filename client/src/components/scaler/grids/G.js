/* eslint-disable array-callback-return */
import './style.css'
import Grid from '@mui/material/Grid'
import gridData from './data/gridData'
import Dot from '../scales/elements/dots/Dot'

export default function G(scaleData) {

    const data = gridData.G
    const dots = scaleData.data[0]
    // console.log(frets)

    return (

        <div>
            {/* G String giggity */}
            <Grid container id="G" >
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