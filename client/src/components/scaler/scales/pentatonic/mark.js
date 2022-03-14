// Scales
import EScaleData from './lib/EScale'
import FScaleData from './lib/FScale';
import FSharpScale from './lib/F#Scale'
import GScaleData from './lib/GScale';
import GSharpScale from './lib/G#Scale';
import AScaleData from './lib/AScale';
import ASharpScale from './lib/A#Scale';
import BScaleData from './lib/BScale';
import CScaleData from './lib/CScale';
import CSharpScale from './lib/C#Scale';
import DScaleData from './lib/DScale';
import DSharpScale from './lib/D#Scale';

const marks = [
    {
        value: 0,
        label: 'E',
        scale: EScaleData
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