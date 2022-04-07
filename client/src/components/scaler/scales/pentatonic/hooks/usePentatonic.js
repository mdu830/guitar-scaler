import { useState, useEffect } from "react";

const usePentatonic = ({ sliderValue, sectionNum }) => {

    const value = sliderValue
    const section = sectionNum

    function addNewValue([valueX, valueY]) {
        let oldArr = [valueX, valueY]
        return oldArr.map((number) =>  number + value > 12 ? number + value - 12 : number + value )
    }

    const Key = (x, y, string) => {
        let arr = []

        addNewValue([x, y]).map((value) => 
            value === 12 ? arr.push(value, 0) : arr.push(value)
        )

        return arr.map((item) => `${item}${string}`)
    }

    const fret = [
        {
            highE: [...Key(0, 3, 'e')],
            B: [...Key(0, 3, 'B')],
            G: [...Key(0, 2, 'G')],
            D: [...Key(0, 2, 'D')],
            A: [...Key(0, 2, 'A')],
            E: [...Key(0, 3, 'E')],
        },
        {
            highE: [...Key(3, 5, 'e')],
            B: [...Key(3, 5, 'B')],
            G: [...Key(2, 4, 'G')],
            D: [...Key(2, 5, 'D')],
            A: [...Key(2, 5, 'A')],
            E: [...Key(3, 5, 'E')],
        },
        {
            highE: [...Key(5, 7, 'e')],
            B: [...Key(5, 8, 'B')],
            G: [...Key(4, 7, 'G')],
            D: [...Key(5, 7, 'D')],
            A: [...Key(5, 7, 'A')],
            E: [...Key(5, 7, 'E')],
        },
        {
            highE: [...Key(7, 10, 'e')],
            B: [...Key(8, 10, 'B')],
            G: [...Key(7, 9, 'G')],
            D: [...Key(7, 9, 'D')],
            A: [...Key(7, 10, 'A')],
            E: [...Key(7, 10, 'E')],
        },
        {
            highE: [...Key(10, 12, 'e')],
            B: [...Key(10, 12, 'B')],
            G: [...Key(9, 12, 'G')],
            D: [...Key(9, 12, 'D')],
            A: [...Key(10, 12, 'A')],
            E: [...Key(10, 12, 'E')],
        }
    ]

    const chooseSection = (section) => {



        const newPentatonic = {
            highE: [...new Set([...fret[0].highE, ...fret[1].highE, ...fret[2].highE, ...fret[3].highE, ...fret[4].highE])],
            B: [...new Set([...fret[0].B, ...fret[1].B, ...fret[2].B, ...fret[3].B, ...fret[4].B])],
            G: [...new Set([...fret[0].G, ...fret[1].G, ...fret[2].G, ...fret[3].G, ...fret[4].G])],
            D: [...new Set([...fret[0].D, ...fret[1].D, ...fret[2].D, ...fret[3].D, ...fret[4].D])],
            A: [...new Set([...fret[0].A, ...fret[1].A, ...fret[2].A, ...fret[3].A, ...fret[4].A])],
            E: [...new Set([...fret[0].E, ...fret[1].E, ...fret[2].E, ...fret[3].E, ...fret[4].E])],
        }

        // function setAll(string) {
        //     let arr = []
            
        //     fret.map((section) => arr.push(...section.highE))
            
        //     return new Set(arr)
        // }
        // console.log(setAll('highE'))

        return 0 === section ? newPentatonic : fret[section - 1]
    }

    const [scale, setScale] = useState(chooseSection(section))

    useEffect(() => {
        setScale(chooseSection(section))
    }, [value])

    useEffect(() => {
        setScale(chooseSection(section))
    }, [section])

    // console.log(scale)

    return ([scale, value])
}

export default usePentatonic;