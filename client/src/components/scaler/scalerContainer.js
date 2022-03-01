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
        one: false,
        two: false,
        three: false,
        four: false,
        five: false
    })

    const [currentScale, setCurrentScale] = useState([frets, lines])

    const handleSection = (event) => {

        const id = event.target.id
        const check = event.target.checked
        let num

        switch (id) {
            case 'one': num = 1
                setChecked({ one: check, two: false, three: false, four: false, five: false })
                break
            case 'two': num = 2
                setChecked({ one: false, two: check, three: false, four: false, five: false })
                break
            case 'three': num = 3
                setChecked({ one: false, two: false, three: check, four: false, five: false })
                break
            case 'four': num = 4
                setChecked({ one: false, two: false, three: false, four: check, five: false })
                break
            case 'five': num = 5
                setChecked({ one: false, two: false, three: false, four: false, five: check })
                break
            default:
                setChecked({ one: false, two: false, three: false, four: false, five: false })
                break
        }
        return check ? setSectionNum(num) : setSectionNum(0)
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
                    <Switch id='one' checked={checked.one} onChange={handleSection} />
                    <Switch id='two' checked={checked.two} onChange={handleSection} />
                    <Switch id='three' checked={checked.three} onChange={handleSection} />
                    <Switch id='four' checked={checked.four}onChange={handleSection} />
                    <Switch id='five' checked={checked.five} onChange={handleSection}
                    />
                </Box>
                
            </div>

        </div >
    );
}