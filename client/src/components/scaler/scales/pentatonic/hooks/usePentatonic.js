/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const usePentatonic = ({ sliderValue, sectionNum }) => {

    const value = sliderValue
    const section = sectionNum

    // Dots Data (finger placements)
    function addNewValue([valueX, valueY]) {
        let oldArr = [valueX, valueY]
        return oldArr.map((number) => number + value > 12 ? number + value - 12 : number + value)
    }

    const Key = (x, y, string) => {
        let arr = []

        addNewValue([x, y]).map((value) =>
            value === 12 ? arr.push(value, 0) : arr.push(value)
        )

        return arr.map((item) => `${item}${string}`)
    }

    // new Data Object
    const frets = {

        highE: [
            [0, 3, 'e'], [3, 5, 'e'], [5, 7, 'e'], [7, 10, 'e'], [10, 12, 'e']
        ],
        B: [
            [0, 3, 'B'], [3, 5, 'B'], [5, 8, 'B'], [8, 10, 'B'], [10, 12, 'B'],
        ],
        G: [
            [0, 2, 'G'], [2, 4, 'G'], [4, 7, 'G'], [7, 9, 'G'], [9, 12, 'G'],
        ], 
        D: [
            [0, 2, 'D'], [2, 5, 'D'], [5, 7, 'D'], [7, 9, 'D'], [9, 12, 'D'],
        ],
        A: [
            [0, 2, 'A'], [2, 5, 'A'], [5, 7, 'A'], [7, 10, 'A'], [10, 12, 'A'],
        ],
        E: [
            [0, 3, 'E'], [3, 5, 'E'], [5, 7, 'E'], [7, 10, 'E'], [10, 12, 'E'],
        ]
    }

    const chooseSection = (section) => {
        const showSection = {
            highE: Key(...frets.highE[0 === section ? 0 : section -1]),
            B: Key(...frets.B[0 === section ? 0 : section -1]),
            G: Key(...frets.G[0 === section ? 0 : section -1]),
            D: Key(...frets.D[0 === section ? 0 : section -1]),
            A: Key(...frets.A[0 === section ? 0 : section -1]),
            E: Key(...frets.E[0 === section ? 0 : section -1])
        }

        function showAll() {
            let strings = { 
                highE: [], B: [], G: [], D: [], A: [], E: []
            }
            // replace this with Oject.entries later
            frets.highE.map((arr) => strings.highE.push(...Key(...arr)))
            frets.B.map((arr) => strings.B.push(...Key(...arr)))
            frets.G.map((arr) => strings.G.push(...Key(...arr)))
            frets.D.map((arr) => strings.D.push(...Key(...arr)))
            frets.A.map((arr) => strings.A.push(...Key(...arr)))
            frets.E.map((arr) => strings.E.push(...Key(...arr)))

            let uniqueFrets = {
                highE: [...new Set(strings.highE)], 
                B: [...new Set(strings.B)], 
                G: [...new Set(strings.G)], 
                D: [...new Set(strings.D)], 
                A: [...new Set(strings.A)], 
                E: [...new Set(strings.E)]
            }

            return uniqueFrets
        }
        return 0 === section ? showAll() : showSection
    }
    console.log(chooseSection(section))

    const [scale, setScale] = useState(chooseSection(section))

    useEffect(() => {
        setScale(chooseSection(section))
    }, [value])

    useEffect(() => {
        setScale(chooseSection(section))
    }, [section])

    // Xarrows Data (arrows and lines)

    return ([scale, value])
}

export default usePentatonic;