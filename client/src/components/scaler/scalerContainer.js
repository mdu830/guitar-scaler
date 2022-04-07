/* eslint-disable react-hooks/exhaustive-deps */
import './style.css'
import { useEffect, useState } from 'react';
import ScalerGrid from './scalerGrid';
import usePentatonic from './scales/pentatonic/hooks/usePentatonic';
import marks from './scales/pentatonic/mark';
import { Slider, Box, Switch } from '@mui/material';

function valueLabelFormat(value) {
    return `key of ${marks[value]}`;
}

export default function GuitarScaler() {

    // slider values
    const [sliderValue, setSliderValue] = useState(0)

    // slider function
    const handleSliderChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setSliderValue(newValue);

        }
    };

    // switch checks and values
    const defaultChecks = { 'one': false, 'two': false, 'three': false, 'four': false, 'five': false }
    const [checked, setChecked] = useState(defaultChecks)
    const [sectionNum, setSectionNum] = useState(0)

    // switch function(s)
    const handleSection = (event) => {
        setChecked({ ...defaultChecks, [event.target.id]: event.target.checked })
        return event.target.checked ? setSectionNum(event.target.value) && setHookData({ sliderValue, sectionNum }) : setSectionNum(0)
    }

    // custom hook(s) 
    const [hookData, setHookData] = useState({ sliderValue, sectionNum })
    const scaleHook = usePentatonic(hookData)

    useEffect(() => {
        setHookData({ sliderValue, sectionNum })
    }, [sectionNum])


    return (
        <div id="application">
            <div id='scaler'>
                <ScalerGrid data={scaleHook} />
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
                        onChangeCommitted={() => setHookData({ sliderValue, sectionNum })}
                        valueLabelDisplay="auto"
                        aria-labelledby="non-linear-slider"
                    />
                </Box>
                <Box sx={{ width: 'auto', paddingLeft: '35px', paddingRight: '35px' }}>
                    <Switch id='one' value={1} checked={checked.one} onChange={handleSection} />
                    <Switch id='two' value={2} checked={checked.two} onChange={handleSection} />
                    <Switch id='three' value={3} checked={checked.three} onChange={handleSection} />
                    <Switch id='four' value={4} checked={checked.four} onChange={handleSection} />
                    <Switch id='five' value={5} checked={checked.five} onChange={handleSection} />
                </Box>
            </div>
        </div >
    );
}