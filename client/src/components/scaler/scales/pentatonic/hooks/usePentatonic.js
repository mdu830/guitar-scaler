import { useState, useEffect } from "react";

const usePentatonic = ({ sliderValue, sectionNum }) => {

    const value = sliderValue
    const section = sectionNum

    function addNewValue([valueOne, valueTwo]) {
        let oldArr = [valueOne, valueTwo]
        return oldArr.map((number) =>  number + value > 12 ? number + value - 12 : number + value )
    }

    const Key = (x, y, string) => {

        let arr = []

        addNewValue([x, y]).map((value) => 
            value === 12 ? arr.push(value, 0) : arr.push(value)
        )

        return arr.map((item) => `${item}${string}`)
    }

    const defaultKey = [
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
            highE: [...new Set([...defaultKey[0].highE, ...defaultKey[1].highE, ...defaultKey[2].highE, ...defaultKey[3].highE, ...defaultKey[4].highE])],
            B: [...new Set([...defaultKey[0].B, ...defaultKey[1].B, ...defaultKey[2].B, ...defaultKey[3].B, ...defaultKey[4].B])],
            G: [...new Set([...defaultKey[0].G, ...defaultKey[1].G, ...defaultKey[2].G, ...defaultKey[3].G, ...defaultKey[4].G])],
            D: [...new Set([...defaultKey[0].D, ...defaultKey[1].D, ...defaultKey[2].D, ...defaultKey[3].D, ...defaultKey[4].D])],
            A: [...new Set([...defaultKey[0].A, ...defaultKey[1].A, ...defaultKey[2].A, ...defaultKey[3].A, ...defaultKey[4].A])],
            E: [...new Set([...defaultKey[0].E, ...defaultKey[1].E, ...defaultKey[2].E, ...defaultKey[3].E, ...defaultKey[4].E])],
        }

        return 0 === section ? newPentatonic : defaultKey[section - 1]
    }

    const [scale, setScale] = useState(chooseSection(section))

    useEffect(() => {
        setScale(chooseSection(section))
    }, [value])

    useEffect(() => {
        setScale(chooseSection(section))
    }, [section])

    // console.log(scale)

    return (scale)
}

export default usePentatonic;