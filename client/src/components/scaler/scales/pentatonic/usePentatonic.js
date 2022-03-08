// this is the future developement model for scale data 
import { useState, useEffect } from "react";


const usePentatonic = (sliderValue) => {

    const num = sliderValue

    const calc = (number) => {
        return number + sliderValue
    }

    const pentatonic = [
        {
            highE: [`${calc(0)}e`, `${calc(3)}e`, `${calc(5)}e`, `${calc(7)}e`, `${calc(10)}e`, `${calc(12)}e`],
            B: [`${calc(0)}B`, `${calc(3)}B`, `${calc(5)}B`, `${calc(8)}B`, `${calc(10)}B`, `${calc(12)}B`],
            G: [`${calc(0)}G`, `${calc(2)}G`, `${calc(4)}G`, `${calc(7)}G`, `${calc(9)}G`, `${calc(12)}G`],
            D: [`${calc(0)}D`, `${calc(2)}D`, `${calc(5)}D`, `${calc(7)}D`, `${calc(9)}D`, `${calc(12)}D`],
            A: [`${calc(0)}A`, `${calc(2)}A`, `${calc(5)}A`, `${calc(7)}A`, `${calc(10)}A`, `${calc(12)}A`],
            E: [`${calc(0)}E`, `${calc(3)}E`, `${calc(5)}E`, `${calc(7)}E`, `${calc(10)}E`, `${calc(12)}E`],
            section: [true, true, true, true, true]
        },
        {
            highE: [`${calc(0)}e`, `${calc(3)}e`],
            B: [`${calc(0)}B`, `${calc(3)}B`],
            G: [`${calc(0)}G`, `${calc(2)}G`],
            D: [`${calc(0)}D`, `${calc(2)}D`],
            A: [`${calc(0)}A`, `${calc(2)}A`],
            E: [`${calc(0)}E`, `${calc(3)}E`],
            section: [true, false, false, false, false]
        },
        {
            highE: [`${calc(3)}e`, `${calc(5)}e`],
            B: [`${calc(3)}B`, `${calc(5)}B`],
            G: [`${calc(2)}G`, `${calc(4)}G`],
            D: [`${calc(2)}D`, `${calc(5)}D`],
            A: [`${calc(2)}A`, `${calc(5)}A`],
            E: [`${calc(3)}E`, `${calc(5)}E`],
            section: [false, true, false, false, false]
        },
        {
            highE: [`${calc(5)}e`, `${calc(7)}e`],
            B: [`${calc(5)}B`, `${calc(8)}B`],
            G: [`${calc(4)}G`, `${calc(7)}G`],
            D: [`${calc(5)}D`, `${calc(7)}D`],
            A: [`${calc(5)}A`, `${calc(7)}A`],
            E: [`${calc(5)}E`, `${calc(7)}E`],
            section: [false, false, true, false, false]
        },
        {
            highE: [`${calc(7)}e`, `${calc(10)}e`],
            B: [`${calc(8)}B`, `${calc(10)}B`],
            G: [`${calc(7)}G`, `${calc(9)}G`],
            D: [`${calc(7)}D`, `${calc(9)}D`],
            A: [`${calc(7)}A`, `${calc(10)}A`],
            E: [`${calc(7)}E`, `${calc(10)}E`],
            section: [false, false, false, true, false]
        },
        {
            highE: [`${calc(10)}e`, `${calc(12)}e`],
            B: [`${calc(10)}B`, `${calc(12)}B`],
            G: [`${calc(9)}G`, `${calc(12)}G`],
            D: [`${calc(9)}D`, `${calc(12)}D`],
            A: [`${calc(10)}A`, `${calc(12)}A`],
            E: [`${calc(10)}E`, `${calc(12)}E`],
            section: [false, false, false, false, true]
        }
    ]


    const [scale, setScale] = useState(pentatonic)

    useEffect(() => {
        // setScale(pentatonic)
        // console.log(scale)
    }, [sliderValue])

    return (scale)

}

export default usePentatonic;