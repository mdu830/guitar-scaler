import './style.css'
import { useState } from 'react';
import ScalerGrid from './scalerGrid';
import marks from './scales/pentatonic/mark';
import { Slider } from '@mui/material';
import { Box } from '@mui/system';

function valueLabelFormat(value) {
    return `key of ${marks[value].label}`;
  }


export default function GuitarScaler() {
    
    const [value, setValue] = useState(0);
    const [scale, setScale] = useState(marks[0].scale)

    const handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
          setValue(newValue);
          setScale(marks[newValue].scale)
        }
      };


    return (
        <div id="application">
            <div id='scaler'>
                <ScalerGrid data={scale} />
            </div>
            <div className="controlBar" color="dark">
                <Box sx={{ width: 'auto', paddingLeft: '35px', paddingRight: '35px'}}>
                    <Slider
                        value={value}
                        min={0}
                        step={1}
                        max={11}
                        getAriaValueText={valueLabelFormat}
                        valueLabelFormat={valueLabelFormat}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="non-linear-slider"
                    />
                </Box>
            </div>

        </div >
    );
}