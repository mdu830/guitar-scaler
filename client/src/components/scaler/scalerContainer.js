import './style.css'
import { useState } from 'react';
import { Button, Navbar } from 'reactstrap';
// Scales
import ScalerGrid from './scalerGrid';
import EmScaleData from './scales/Em/EmScale'
import FScaleData from './scales/F/FScale';
import FSharpScaleData from './scales/F#/F#Scale';
import GScaleData from './scales/G/GScale';


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
        }

    ];

    const handleUpClick = () => {
        setScale(marks[3].scale)
    }
    const handleDownClick = () => {
        setScale(marks[2].scale)
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