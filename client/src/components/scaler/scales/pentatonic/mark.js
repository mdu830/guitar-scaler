// Scales
import EScaleData from './scales/EScaleNew'
import FScaleData from './scales/FScaleNew';
import FSharpScale from './scales/F#ScaleNew'
import GScaleData from './scales/GScaleNew';

const marks = [
    {
        value: 0,
        label: 'E',
        scale: EScaleData,
    },
    {
        value: 1,
        label: 'F',
        scale: FScaleData,
    },
    {
        value: 2,
        label: 'F#',
        scale: FSharpScale,
    },
    {
        value: 3,
        label: 'G',
        scale: GScaleData,
    },
    {
        value: 4,
        label: 'G#',
        // scale: GSharpScaleData,
    },
    {
        value: 5,
        label: 'A',
        // scale: AScaleData,
    },
    {
        value: 6,
        label: 'A#',
        // scale: ASharpScaleData,
    },
    {
        value: 7,
        label: 'B',
        // scale: BScaleData,
    },
    {
        value: 8,
        label: 'C',
        // scale: CScaleData,
    },
    {
        value: 9,
        label: 'C#',
        // scale: CSharpScaleData,
    },
    {
        value: 10,
        label: 'D',
        // scale: DScaleData,
    },
    {
        value: 11,
        label: 'D#',
        // scale: DSharpScaleData,
    }

];

export default marks;