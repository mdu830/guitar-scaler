/* eslint-disable react-hooks/exhaustive-deps */
import './style.css'
import { useEffect, useState } from 'react';
import ScalerGrid from './scalerGrid';
import usePentatonic from './scales/pentatonic/hooks/usePentatonic';
import marks from './scales/pentatonic/mark';
import { Slider, Box, Switch, FormControlLabel } from '@mui/material';

function valueLabelKey(value) {
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
                <Box sx={{ width: 'auto', paddingLeft: '4%', paddingRight: '4%' }}>
                    <Slider
                        value={sliderValue}
                        min={0}
                        step={1}
                        max={11}
                        getAriaValueText={valueLabelKey}
                        valueLabelFormat={valueLabelKey}
                        onChange={handleSliderChange}
                        onChangeCommitted={() => setHookData({ sliderValue, sectionNum })}
                        valueLabelDisplay="auto"
                        aria-labelledby="non-linear-slider"
                    />
                </Box>
                <Box >
                    <FormControlLabel
                        sx={{ marginLeft: '10%' }}
                        label="Section 1"
                        labelPlacement="bottom"
                        control={
                            <Switch id='one' value={1} checked={checked.one} onChange={handleSection} />
                        }
                    />
                    <FormControlLabel
                        sx={{ marginLeft: '10%' }}
                        label="Section 2"
                        labelPlacement="bottom"
                        control={
                            <Switch id='two' value={2} checked={checked.two} onChange={handleSection} />
                        }
                    />
                    <FormControlLabel
                        sx={{ marginLeft: '10%' }}
                        label="Section 3"
                        labelPlacement="bottom"
                        control={
                            <Switch id='three' value={3} checked={checked.three} onChange={handleSection} />
                        }
                    />
                    <FormControlLabel
                        sx={{ marginLeft: '10%' }}
                        label="Section 4"
                        labelPlacement="bottom"
                        control={
                            <Switch id='four' value={4} checked={checked.four} onChange={handleSection} />
                        }
                    />
                    <FormControlLabel
                        sx={{ marginLeft: '10%' }}
                        label="Section 5"
                        labelPlacement="bottom"
                        control={
                            <Switch id='five' value={5} checked={checked.five} onChange={handleSection} />
                        }
                    />
                </Box>
            </div>
        </div >
    );
}