// this is the future developement model for scale data 
import { useState, useEffect } from "react";


const usePentatonic = (sliderValue) => {

    const value = sliderValue

    // +3 dot spacing
    const one = (x) => { 
        return x + value >= 14 ? -14 + x + value : x + value
    }
    // +4 dot spacing
    const two = (x) => { 
        return x + value > 14 ? -15 + x + value : x + value
    }


    const pentatonic = [
        {
            highE: [`${one(0)}e`, `${two(3)}e`, `${one(5)}e`, `${one(7)}e`, `${two(10)}e`, `${one(12)}e`],
            B: [`${one(0)}B`, `${one(3)}B`, `${one(5)}B`, `${one(8)}B`, `${one(10)}B`, `${one(12)}B`],
            G: [`${one(0)}G`, `${one(2)}G`, `${one(4)}G`, `${one(7)}G`, `${one(9)}G`, `${one(12)}G`],
            D: [`${one(0)}D`, `${one(2)}D`, `${one(5)}D`, `${one(7)}D`, `${one(9)}D`, `${one(12)}D`],
            A: [`${one(0)}A`, `${one(2)}A`, `${one(5)}A`, `${one(7)}A`, `${one(10)}A`, `${one(12)}A`],
            E: [`${one(0)}E`, `${two(3)}E`, `${one(5)}E`, `${one(7)}E`, `${two(10)}E`, `${one(12)}E`],
            section: [true, true, true, true, true]
        },
        // {
        //     highE: [`${one(0)}e`, `${one(3)}e`],
        //     B: [`${one(0)}B`, `${one(3)}B`],
        //     G: [`${one(0)}G`, `${one(2)}G`],
        //     D: [`${one(0)}D`, `${one(2)}D`],
        //     A: [`${one(0)}A`, `${one(2)}A`],
        //     E: [`${one(0)}E`, `${one(3)}E`],
        //     section: [true, false, false, false, false]
        // },
        // {
        //     highE: [`${one(3)}e`, `${one(5)}e`],
        //     B: [`${one(3)}B`, `${one(5)}B`],
        //     G: [`${one(2)}G`, `${one(4)}G`],
        //     D: [`${one(2)}D`, `${one(5)}D`],
        //     A: [`${one(2)}A`, `${one(5)}A`],
        //     E: [`${one(3)}E`, `${one(5)}E`],
        //     section: [false, true, false, false, false]
        // },
        // {
        //     highE: [`${one(5)}e`, `${one(7)}e`],
        //     B: [`${one(5)}B`, `${one(8)}B`],
        //     G: [`${one(4)}G`, `${one(7)}G`],
        //     D: [`${one(5)}D`, `${one(7)}D`],
        //     A: [`${one(5)}A`, `${one(7)}A`],
        //     E: [`${one(5)}E`, `${one(7)}E`],
        //     section: [false, false, true, false, false]
        // },
        // {
        //     highE: [`${one(7)}e`, `${one(10)}e`],
        //     B: [`${one(8)}B`, `${one(10)}B`],
        //     G: [`${one(7)}G`, `${one(9)}G`],
        //     D: [`${one(7)}D`, `${one(9)}D`],
        //     A: [`${one(7)}A`, `${one(10)}A`],
        //     E: [`${one(7)}E`, `${one(10)}E`],
        //     section: [false, false, false, true, false]
        // },
        // {
        //     highE: [`${one(10)}e`, `${one(12)}e`],
        //     B: [`${one(10)}B`, `${one(12)}B`],
        //     G: [`${one(9)}G`, `${one(12)}G`],
        //     D: [`${one(9)}D`, `${one(12)}D`],
        //     A: [`${one(10)}A`, `${one(12)}A`],
        //     E: [`${one(10)}E`, `${one(12)}E`],
        //     section: [false, false, false, false, true]
        // }
    ]


    const [scale, setScale] = useState(pentatonic)

    useEffect(() => {
        setScale(pentatonic)
    }, [sliderValue])

    console.log(scale[0])

    return (scale)

}

export default usePentatonic;