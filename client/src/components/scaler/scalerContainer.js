import './style.css'
import { useEffect, useState } from 'react';
import ScalerGrid from './scalerGrid';
import marks from './scales/pentatonic/mark';
import {
    Slider,
    Box,
    Switch
} from '@mui/material';


function valueLabelFormat(value) {
    return `key of ${marks[value].label}`;
}


export default function GuitarScaler() {


    // slider states (for adjusting the scale key)
    const [sliderValue, setSliderValue] = useState(0);

    const [currentScale, setCurrentScale] = useState(marks[sliderValue].scale.default[0])

    const handleSliderChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setSliderValue(newValue);
        }
    };

    const [checked, setChecked] = useState(true);

    const handleSection = (event) => {

        setChecked(event.target.checked);

        const showHide = event.target.checked
            ? marks[sliderValue].scale.section1[0]
            : marks[sliderValue].scale.section1[1]
    }

    return (
        <div id="application">
            <div id='scaler'>
                {/* pass currentScale here */}
                <ScalerGrid data={currentScale} />
            </div>
            <div className="controlBar" color="dark">
                <Box sx={{ width: 'auto', paddingLeft: '35px', paddingRight: '35px' }}>
                    <Slider
                        value={sliderValue}
                        min={0}
                        step={1}
                        max={11}
                        getAriaValueText={valueLabelFormat}
                        valueLabelFormat={valueLabelFormat}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="non-linear-slider"
                    />
                </Box>
                <Box sx={{ width: 'auto', paddingLeft: '35px', paddingRight: '35px' }}>
                    {/* need handleselect call here */}
                    <Switch
                        checked={checked}
                        onChange={handleSection}
                    />
                </Box>
            </div>

        </div >
    );
}