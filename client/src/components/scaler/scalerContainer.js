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

    const [sliderValue, setSliderValue] = useState(0);

    const [checked, setChecked] = useState(false);

    const [sectionNum, setSectionNum] = useState(0)

    const [currentScale, setCurrentScale] = useState(marks[sliderValue].scale[sectionNum])

    const handleSliderChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setSliderValue(newValue);
            
        }
    };

    const handleSection = (event) => {
        setChecked(event.target.checked);
        const showHide = event.target.checked ? setSectionNum(1) : setSectionNum(0)
        return showHide
    }

    useEffect(() => {
        setCurrentScale(marks[sliderValue].scale[sectionNum])
    }, [sliderValue])

    useEffect(() => {
        setCurrentScale(marks[sliderValue].scale[sectionNum])
    }, [sectionNum])


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
                        id='section1'
                        checked={checked}
                        onChange={handleSection}
                    />
                </Box>
            </div>

        </div >
    );
}