import { useState, useEffect } from "react";

const usePentatonic = ({ sliderValue, sectionNum }) => {

    const value = sliderValue
    const section = sectionNum

    const key = (x) => { return x + value > 12 ? x + value - 12 : x + value }

    const newKey = (x, y, string) => {

        let arr = []

        const addNewValue = ([x, y]) => {
            let oldArr = [x, y]
            return oldArr.map((number) => { return number + value > 12 ? number + value - 12 : number + value })
        }

        addNewValue([x, y]).map((value) => {
            return value === 12 ? arr.push(value, 0) : arr.push(value)
        })

        return arr.map((item) => `${item}${string}`)

    }
    // console.log(newKey(0, 3, 'e'))

    const defKey = [
        {
            highE: [...newKey(0, 3, 'e')],
            B: [...newKey(0, 3, 'B')],
            G: [...newKey(0, 2, 'G')],
            D: [...newKey(0, 2, 'D')],
            A: [...newKey(0, 2, 'A')],
            E: [...newKey(0, 3, 'E')],
        },
        {
            highE: [...newKey(3, 5, 'e')],
            B: [...newKey(3, 5, 'B')],
            G: [...newKey(2, 4, 'G')],
            D: [...newKey(2, 5, 'D')],
            A: [...newKey(2, 5, 'A')],
            E: [...newKey(3, 5, 'E')],
        },
        {
            highE: [...newKey(5, 7, 'e')],
            B: [...newKey(5, 8, 'B')],
            G: [...newKey(4, 7, 'G')],
            D: [...newKey(5, 7, 'D')],
            A: [...newKey(5, 7, 'A')],
            E: [...newKey(5, 7, 'E')],
        },
        {
            highE: [...newKey(7, 10, 'e')],
            B: [...newKey(8, 10, 'B')],
            G: [...newKey(7, 9, 'G')],
            D: [...newKey(7, 9, 'D')],
            A: [...newKey(7, 10, 'A')],
            E: [...newKey(7, 10, 'E')],
        },
        {
            highE: [...newKey(10, 12, 'e')],
            B: [...newKey(10, 12, 'B')],
            G: [...newKey(9, 12, 'G')],
            D: [...newKey(9, 12, 'D')],
            A: [...newKey(10, 12, 'A')],
            E: [...newKey(10, 12, 'E')],
        }
    ]

    const chooseSection = (section) => {

        const newPentatonic = {
            highE: [...new Set([...defKey[0].highE, ...defKey[1].highE, ...defKey[2].highE, ...defKey[3].highE, ...defKey[4].highE])],
            B: [...new Set([...defKey[0].B, ...defKey[1].B, ...defKey[2].B, ...defKey[3].B, ...defKey[4].B])],
            G: [...new Set([...defKey[0].G, ...defKey[1].G, ...defKey[2].G, ...defKey[3].G, ...defKey[4].G])],
            D: [...new Set([...defKey[0].D, ...defKey[1].D, ...defKey[2].D, ...defKey[3].D, ...defKey[4].D])],
            A: [...new Set([...defKey[0].A, ...defKey[1].A, ...defKey[2].A, ...defKey[3].A, ...defKey[4].A])],
            E: [...new Set([...defKey[0].E, ...defKey[1].E, ...defKey[2].E, ...defKey[3].E, ...defKey[4].E])],
        }

        return 0 === section ? newPentatonic : defKey[section - 1]
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