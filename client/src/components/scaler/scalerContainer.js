import './style.css'
import { useState } from 'react';
import { Button, Navbar } from 'reactstrap';
// Scales
import ScalerGrid from './scalerGrid';
import EmScaleData from './scales/E/EScale'
import FScaleData from './scales/F/FScale';
import FSharpScaleData from './scales/F#/F#Scale';
import GScaleData from './scales/G/GScale';
import GSharpScaleData from './scales/G#/G#Scale';
import AScaleData from './scales/A/AScale';
import ASharpScaleData from './scales/A#/A#Scale';
import BScaleData from './scales/B/BScale';
import CScaleData from './scales/C/CScale';
import CSharpScaleData from './scales/C#/C#Scale';
import DScaleData from './scales/D/DScale';
import DSharpScaleData from './scales/D#/D#Scale';


export default function GuitarScaler() {

    const [scale, setScale] = useState(EmScaleData)

    const marks = [
        {
            value: 0,
            label: 'Em',
            scale: EmScaleData,
        },
        {
            value: 1,
            label: 'F',
            scale: FScaleData,
        },
        {
            value: 2,
            label: 'F#',
            scale: FSharpScaleData,
        },
        {
            value: 3,
            label: 'G',
            scale: GScaleData,
        },
        {
            value: 4,
            label: 'G#',
            scale: GSharpScaleData,
        },
        {
            value: 5,
            label: 'A',
            scale: AScaleData,
        },
        {
            value: 6,
            label: 'A#',
            scale: ASharpScaleData,
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
            scale: CSharpScaleData,
        },
        {
            value: 10,
            label: 'D',
            scale: DScaleData,
        },
        {
            value: 11,
            label: 'D#',
            scale: DSharpScaleData,
        }

    ];

    const handleUpClick = () => {
        setScale(marks[11].scale)
    }
    const handleDownClick = () => {
        setScale(marks[10].scale)
    }

    return (
        <div id="application">
            <div id='scaler'>
                <ScalerGrid data={scale} />
            </div>
            <Navbar className="titleBar" color="dark" dark>
                <Button onClick={handleDownClick}>Down</Button>
                <Button onClick={handleUpClick}>Up</Button>
            </Navbar>

        </div>
    );
}