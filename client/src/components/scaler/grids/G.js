import '../style.css'
import Grid from '@mui/material/Grid'

export default function G(data) {

    const fingerPlacement = data.data

    return (
        <div>
            {/* G String */}
            <Grid container id="G">
                <div className='fret0'>
                    <div id={fingerPlacement.fret0.id} className={fingerPlacement.fret0.isDot ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret1'>
                    <div id={fingerPlacement.fret1.id} className={fingerPlacement.fret1.isDot ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret2'>
                    <div id={fingerPlacement.fret2.id} className={fingerPlacement.fret2.isDot ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret3'>
                    <div id={fingerPlacement.fret3.id} className={fingerPlacement.fret3.isDot ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret4'>
                    <div id={fingerPlacement.fret4.id} className={fingerPlacement.fret4.isDot ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret5'>
                    <div id={fingerPlacement.fret5.id} className={fingerPlacement.fret5.isDot ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret6'>
                    <div id={fingerPlacement.fret6.id} className={fingerPlacement.fret6.isDot ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret7'>
                    <div id={fingerPlacement.fret7.id} className={fingerPlacement.fret7.isDot ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret8'>
                    <div id={fingerPlacement.fret8.id} className={fingerPlacement.fret8.isDot ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret9'>
                    <div id={fingerPlacement.fret9.id} className={fingerPlacement.fret9.isDot ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret10'>
                    <div id={fingerPlacement.fret10.id} className={fingerPlacement.fret10.isDot ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret11'>
                    <div id={fingerPlacement.fret11.id} className={fingerPlacement.fret11.isDot ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret12'>
                    <div id={fingerPlacement.fret12.id} className={fingerPlacement.fret12.isDot ? 'redDot' : 'dot'}>

                    </div>
                </div>
            </Grid>
        </div>
    )
}