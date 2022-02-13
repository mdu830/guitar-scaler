import './style.css'
import { useState } from 'react';
import ScalerGrid from './scalerGrid';
import marks from './scales/pentatonic/mark';
import {
    Slider,
    Box,
    FormControlLabel,
    Switch
} from '@mui/material';


function valueLabelFormat(value) {
    return `key of ${marks[value].label}`;
}


export default function GuitarScaler() {
    // slider states (for scale keys)
    const [sliderValue, setSliderValue] = useState(0);
    const [scale, setScale] = useState(marks[0].scale)
    // console.log(scale)

    // select states (for show/hide scale sections)
    const [currentScale, setCurrentScale] = useState([
        scale.section1,
        scale.section2,
        scale.section3,
        scale.section4,
        scale.section5
    ])
    console.log(currentScale)

    const handleSectionSelect = (event, section) => {
        // take in this section(prop) at this event
        // if section is true setCurrentScale(this section.values to false) else make scale. this section default
    }


    const handleSliderChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setSliderValue(newValue);
            setScale(marks[newValue].scale)
        }
    };

    return (
        <div id="application">
            <div id='scaler'>
                <ScalerGrid data={scale} />
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
                    <FormControlLabel 
                    control={<Switch defaultChecked />} 
                    label="Section 1"
                    section={1} />

                    <FormControlLabel 
                    control={<Switch defaultChecked />} 
                    label="Section 2"
                    section={2} />

                    <FormControlLabel 
                    control={<Switch defaultChecked />} 
                    label="Section 3" 
                    section={3} />

                    <FormControlLabel 
                    control={<Switch defaultChecked />} 
                    label="Section 4" 
                    section={4}/
                    >
                    <FormControlLabel 
                    control={<Switch defaultChecked />} 
                    label="Section 5"
                    section={5}/>
                </Box>
            </div>

        </div >
    );
}