// Scales
import EScaleData from './scales/EScale'
import FScaleData from './scales/FScale';
import FSharpScale from './scales/F#Scale'
import GScaleData from './scales/GScale';
import GSharpScale from './scales/G#Scale';
import AScaleData from './scales/AScale';
import ASharpScale from './scales/A#Scale';
import BScaleData from './scales/BScale';
import CScaleData from './scales/CScale';
import CSharpScale from './scales/C#Scale';
import DScaleData from './scales/DScale';
import DSharpScale from './scales/D#Scale';

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
        scale: CSharpScale,
    },
    {
        value: 10,
        label: 'D',
        scale: DScaleData,
    },
    {
        value: 11,
        label: 'D#',
        scale: DSharpScale,
    }

];

export default marks;