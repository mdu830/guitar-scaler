// Scales
import EScaleData from './scales/EScaleNew'
import FScaleData from './scales/FScaleNew';
import FSharpScale from './scales/F#ScaleNew'
import GScaleData from './scales/GScaleNew';
import GSharpScale from './scales/G#ScaleNew';
import AScaleData from './scales/AScaleNew';
import ASharpScale from './scales/A#ScaleNew';
import BScaleData from './scales/BScaleNew';
import CScaleData from './scales/CScaleNew';

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
        scale: GSharpScale,
    },
    {
        value: 5,
        label: 'A',
        scale: AScaleData,
    },
    {
        value: 6,
        label: 'A#',
        scale: ASharpScale,
    },
    {
        value: 7,
        label: 'B',
        scale: BScaleData,
    },
    {
        value: 8,
        label: 'C',
        scale: CScaleData,
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