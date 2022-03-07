/* eslint-disable react-hooks/exhaustive-deps */
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
    // key slider
    const [sliderValue, setSliderValue] = useState(0)
    const [sectionNum, setSectionNum] = useState(0)

    const frets = marks[sliderValue].scale[sectionNum]
    const lines = marks[sliderValue].scale[6].sectionLines

    const handleSliderChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setSliderValue(newValue);
        }
    };
    // section switches 
    const [checked, setChecked] = useState({
        one: false, two: false, three: false, four: false, five: false
    })

    const [currentScale, setCurrentScale] = useState([frets, lines])

    const handleSection = (event) => {

        const id = event.target.id
        const check = event.target.checked
        const value = event.target.value

        switch (id) {
            case 'one': 
                setChecked({ one: check, two: false, three: false, four: false, five: false })
                break
            case 'two': 
                setChecked({ one: false, two: check, three: false, four: false, five: false })
                break
            case 'three': 
                setChecked({ one: false, two: false, three: check, four: false, five: false })
                break
            case 'four': 
                setChecked({ one: false, two: false, three: false, four: check, five: false })
                break
            case 'five': 
                setChecked({ one: false, two: false, three: false, four: false, five: check })
                break
            default:
                setChecked({ one: false, two: false, three: false, four: false, five: false })
                break
        }
        return check ? setSectionNum(value) : setSectionNum(0)
    }

    useEffect(() => {
        setCurrentScale([frets, lines])
    }, [sliderValue])

    useEffect(() => {
        setCurrentScale([frets, lines])
    }, [sectionNum])


    return (
        <div id="application">
            <div id='scaler'>
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
                    <Switch id='one' value={1} checked={checked.one} onChange={handleSection} />
                    <Switch id='two' value={2} checked={checked.two} onChange={handleSection} />
                    <Switch id='three' value={3} checked={checked.three} onChange={handleSection} />
                    <Switch id='four' value={4} checked={checked.four}onChange={handleSection} />
                    <Switch id='five' value={5} checked={checked.five} onChange={handleSection}
                    />
                </Box>
                
            </div>

        </div >
    );
}