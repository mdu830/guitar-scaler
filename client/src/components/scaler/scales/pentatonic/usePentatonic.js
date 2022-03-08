// this is the future developement model for scale data 
import { useState, useEffect } from "react";


const usePentatonic = (sliderValue) => {

    const num = sliderValue

    const calc = (number) => {
        return number + sliderValue
    }


    const [scale, setScale] = useState(
        [
            {
                highE: [`${calc(0)}e`, `${calc(3)}e`, `5e`, `7e`, `10e`, `12e`],
                B: [`${calc(0)}B`, `${calc(3)}B`, `5B`, `8B`, `10B`, `12B`],
                G: [`${calc(0)}G`, `2G`, `4G`, `7G`, `9G`, `12G`],
                D: [`0D`, `2D`, `5D`, `7D`, `9D`, `12D`],
                A: [`0A`, `2A`, `5A`, `7A`, `10A`, `12A`],
                E: [`${calc(0)}E`, `${calc(3)}E`, `5E`, `7E`, `10E`, `12E`],
                section: [true, true, true, true, true]
            },
            {
                highE: [`${calc(0)}e`, `${calc(3)}e`],
                B: [`${calc(0)}B`, `${calc(3)}B`],
                G: [`${calc(0)}G`, `2G`],
                D: [`0D`, `2D`],
                A: [`0A`, `2A`],
                E: [`${calc(0)}E`, `${calc(3)}E`],
                section: [true, false, false, false, false]
            },
            {
                highE: [`${calc(3)}e`, `5e`],
                B: [`${calc(3)}B`, `5B`],
                G: [`2G`, `4G`],
                D: [`2D`, `5D`],
                A: [`2A`, `5A`],
                E: [`${calc(3)}E`, `5E`],
                section: [false, true, false, false, false]
            },
            {
                highE: [`5e`, `7e`],
                B: [`5B`, `8B`],
                G: [`4G`, `7G`],
                D: [`5D`, `7D`],
                A: [`5A`, `7A`],
                E: [`5E`, `7E`],
                section: [false, false, true, false, false]
            },
            {
                highE: [`7e`, `10e`],
                B: [`8B`, `10B`],
                G: [`7G`, `9G`],
                D: [`7D`, `9D`],
                A: [`7A`, `10A`],
                E: [`7E`, `10E`],
                section: [false, false, false, true, false]
            },
            {
                highE: [`10e`, `12e`],
                B: [`10B`, `12B`],
                G: [`9G`, `12G`],
                D: [`9D`, `12D`],
                A: [`10A`, `12A`],
                E: [`10E`, `12E`],
                section: [false, false, false, false, true]
            },
            {
                sectionLines: [
                    {
                        section: [ 
                            { start: `${calc(0)}e`, end: `${calc(3)}e` }, { start: `${calc(3)}e`, end: `${calc(3)}B` }, { start: `${calc(3)}B`, end: `2G` },
                            { start: `2G`, end: `2D` }, { start: `2D`, end: `2A` }, { start: `2A`, end: `${calc(3)}E` },
                            { start: `${calc(3)}E`, end: `${calc(0)}E` }, { start: `${calc(0)}E`, end: `0A` }, { start: `0A`, end: `0D` },
                            { start: `0D`, end: `${calc(0)}G` }, { start: `${calc(0)}G`, end: `${calc(0)}B` }, { start: `${calc(0)}B`, end: `${calc(0)}e` }
                        ],
                        color: `rgba(255, 0, 0, 0.841)` 
                    },
                    {
                        section: [
                            { start: `${calc(3)}e` , end: `${calc(3)}B` }, { start: `${calc(3)}B` , end: `2G` }, { start: `2G` , end: `2D` },
                            { start: `2D` , end: `2A` }, { start: `2A` , end: `${calc(3)}E` }, { start: `${calc(3)}e` , end: `5e` },
                            { start: `5e` , end: `5B` }, { start: `5B` , end: `4G` }, { start: `4G` , end: `5D` },
                            { start: `5D` , end: `5A` }, { start: `5A` , end: `5E` }, { start: `5E` , end: `${calc(3)}E` }
                        ],
                        color: `rgba(255, 1${calc(3)}8, 42, 0.671)`
                    },
                    {
                        section: [
                            { start: `5e` , end: `5B` }, { start: `5B` , end: `4G` }, { start: `4G` , end: `5D` },
                            { start: `5D` , end: `5A` }, { start: `5A` , end: `5E` }, { start: `5e` , end: `7e` },
                            { start: `7e` , end: `8B` }, { start: `8B` , end: `7G` }, { start: `7G` , end: `7D` },
                            { start: `7D` , end: `7A` }, { start: `7A` , end: `7E` }, { start: `7E` , end: `5E` },
                        ], 
                        color: `rgba(251, 255, 42, 0.671)`
                    },
                    {
                        section: [
                            { start: `7e` , end: `8B` }, { start: `8B` , end: `7G` }, { start: `7D` , end: `7A` },
                            { start: `7A` , end: `7E` }, { start: `7e` , end: `10e` }, { start: `10e` , end: `10B` },
                            { start: `10B` , end: `9G` }, { start: `9G` , end: `9D` }, { start: `9D` , end: `10A` },
                            { start: `10A` , end: `10E` }, { start: `10E` , end: `7E` }
                        ],
                        color: `rgba(85, 255, 42, 0.671)`
                    },
                    {
                        section: [
                            { start: `10e` , end: `10B` }, { start: `10B` , end: `9G` }, { start: `9G` , end: `9D` },
                            { start: `9D` , end: `10A` }, { start: `10A` , end: `10E` }, { start: `10e` , end: `12e` },
                            { start: `12e` , end: `12B` }, { start: `12B` , end: `12G` }, { start: `12G` , end: `12D` },
                            { start: `12D` , end: `12A` }, { start: `12A` , end: `12E` }, { start: `12E` , end: `10E` }
                        ],
                        color: `rgba(42, 255, 202, 0.671)`
                    }  
                ] 
            }    
        ]
    )

    useEffect(() => {
        // setScale() setScale numbers + slider value
        // console.log(scale)
    },[sliderValue])

    return (scale)

}

export default usePentatonic;