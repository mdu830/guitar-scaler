import { useState, useEffect } from "react";

const usePentatonic = ({ sliderValue, sectionNum }) => {

    const value = sliderValue
    const section = sectionNum
    // +3 dot spacing function
    const one = (x) => { return x + value >= 14 ? -14 + x + value : x + value }
    // +4 dot spacing function
    const two = (x) => { return x + value > 14 ? -15 + x + value : x + value }

    // returns selected pentatonic section 
    const chooseSection = (section) => {

        let slice = section - 1
        let position = section - 0 + 1

        const newSection = {
            highE: Object.values(pentatonic.highE.slice(slice, position)),
            B: Object.values(pentatonic.B.slice(slice, position)),
            G: Object.values(pentatonic.G.slice(slice, position)),
            D: Object.values(pentatonic.D.slice(slice, position)),
            A: Object.values(pentatonic.A.slice(slice, position)),
            E: Object.values(pentatonic.E.slice(slice, position))
        }
        
        return 0 === section ? pentatonic : newSection
    }

    const pentatonic = {
        highE: [`${one(0)}e`, `${two(3)}e`, `${one(5)}e`, `${one(7)}e`, `${two(10)}e`, `${one(12)}e`],
        B: [`${one(0)}B`, `${two(3)}B`, `${one(5)}B`, `${two(8)}B`, `${one(10)}B`, `${one(12)}B`],
        G: [`${one(0)}G`, `${one(2)}G`, `${one(4)}G`, `${two(7)}G`, `${one(9)}G`, `${two(12)}G`],
        D: [`${one(0)}D`, `${one(2)}D`, `${two(5)}D`, `${one(7)}D`, `${one(9)}D`, `${two(12)}D`],
        A: [`${one(0)}A`, `${one(2)}A`, `${two(5)}A`, `${one(7)}A`, `${two(10)}A`, `${one(12)}A`],
        E: [`${one(0)}E`, `${two(3)}E`, `${one(5)}E`, `${one(7)}E`, `${two(10)}E`, `${one(12)}E`],
        // section: [true, true, true, true, true]
    }

    const [scale, setScale] = useState(chooseSection(section))

    useEffect(() => {
        setScale(chooseSection(section))
    }, [value])

    useEffect(() => {
        setScale(chooseSection(section))
    }, [section])

    console.log(scale)

    return (scale)
}

export default usePentatonic;