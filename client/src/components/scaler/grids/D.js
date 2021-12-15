import '../style.css'
import Grid from '@mui/material/Grid'

export default function D(data) {

    const fingerPlacement = data.data

    return (
        <div>
            {/* D String */}
            <Grid container id="D">
            <div className='fret0'>
                    <div className={fingerPlacement.fret0 ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret1'>
                    <div className={fingerPlacement.fret1 ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret2'>
                    <div className={fingerPlacement.fret2 ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret3'>
                    <div className={fingerPlacement.fret3 ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret4'>
                    <div className={fingerPlacement.fret4 ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret5'>
                    <div className={fingerPlacement.fret5 ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret6'>
                    <div className={fingerPlacement.fret6 ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret7'>
                    <div className={fingerPlacement.fret7 ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret8'>
                    <div className={fingerPlacement.fret8 ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret9'>
                    <div className={fingerPlacement.fret9 ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret10'>
                    <div className={fingerPlacement.fret10 ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret11'>
                    <div className={fingerPlacement.fret11 ? 'redDot' : 'dot'}>

                    </div>
                </div>

                <div className='fret12'>
                    <div className={fingerPlacement.fret12 ? 'redDot' : 'dot'}>

                    </div>
                </div>
            </Grid>
        </div>
    )
}